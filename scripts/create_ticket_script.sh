#!/usr/bin/bash
REPOSITORY_URL=https://github.com/dpavloff/build-history-layout

GIT_TAGS=$(git tag -l --sort=-version:refname)

TAGS=${GIT_TAGS}
LATEST_TAG=${TAGS[0]}
echo "Latest tag: $LATEST_TAG"
PREVIOUS_TAG=${TAGS[1]}
AUTHOR=$(git show ${LATEST_TAG} | grep Author: | head -1)
echo "Authro: $AUTHOR"
DATE=$(git show ${LATEST_TAG} | grep Date: | head -1)
echo "Date: $DATE"
DESCRIPTION="${AUTHOR}\n${DATE}\nV: ${LATEST_TAG}"
echo "Description: $DESCRIPTION"
UNIQUE="dpavloff/build-history-layout/master/${LATEST_TAG}"
echo "UNIQUE: $UNIQUE"

COMMITS=$(git log $PREVIOUS_TAG..$LATEST_TAG --pretty=format:"%H")

YANDEX_ISSUES="https://api.tracker.yandex.net/v2/issues/"
YANDEX_ISSUES_SEARCH="https://api.tracker.yandex.net/v2/issues/_search"

AUTH_HEADER="Authorization: OAuth ${OAuth}"
ORG_HEADER="X-Org-Id: ${OrgID}"
CONTENT_TYPE="Content-Type: application/json"

MARKDOWN="[Full Changelog]($REPOSITORY_URL/compare/$PREVIOUS_TAG...$LATEST_TAG)"
MARKDOWN+='\n'

# Loop over each commit and look for merged pull requests
for COMMIT in $COMMITS; do
	# Get the subject of the current commit
	SUBJECT=$(git log -1 ${COMMIT} --pretty=format:"%s")

	# If the subject contains "Merge pull request #xxxxx" then it is deemed a pull request
	PULL_REQUEST=$( grep -Eo "Merge pull request #[[:digit:]]+" <<< "$SUBJECT" )
	if [[ $PULL_REQUEST ]]; then
		# Perform a substring operation so we're left with just the digits of the pull request
		PULL_NUM=${PULL_REQUEST#"Merge pull request #"}
		AUTHOR_NAME=$(git log -1 ${COMMIT} --pretty=format:"%an")
		AUTHOR_EMAIL=$(git log -1 ${COMMIT} --pretty=format:"%ae")

		# Get the body of the commit
		BODY=$(git log -1 ${COMMIT} --pretty=format:"%b")
		MARKDOWN+='\n'
		MARKDOWN+=" - [#$PULL_NUM]($REPOSITORY_URL/pull/$PULL_NUM): $BODY"
	fi
done


API_POST_ISSUE=$(curl -o /dev/null -s -w "%{http_code}" POST ${YANDEX_ISSUES} -H "${AUTH_HEADER}" -H "${ORG_HEADER}" -H "${CONTENT_TYPE}" -d '{
		"summary":"Adding issue for commit '"${LATEST_TAG}"'",
		"queue":"TMP",
		"type":"task",
		"description":"'"${DESCRIPTION}"'",
		"unique":"'"${UNIQUE}"'"
	}'
)

sleep 3

echo "API_POST_ISSUE: ${API_POST_ISSUE}"

API_TASK_KEY=$(curl --w '%{http_code}' -s -o /dev/null POST ${YANDEX_ISSUES_SEARCH} -H "${AUTH_HEADER}" -H "${ORG_HEADER}" -H "${CONTENT_TYPE}" -d '{
        "filter": {
            "unique":"'"${UNIQUE}"'"
        }
    }'
)

if [ $API_POST_ISSUE -eq 409 ]
then
    echo "Version already exists"

	UPDATED_DESCRIPTION=$"${AUTHOR} \n ${DATE}\n Version: ${LATEST_TAG} (updated)"

    UPDATED_STATUS=$(curl -w '%{http_code}' -o /dev/null -s PATCH \
        "${API_POST_ISSUE}${API_TASK_KEY}" -H ${AUTH_HEADER} -H ${ORG_HEADER} -H ${CONTENT_TYPE} -d '{
            "summary":"Adding issue for commit "'"${LATEST_TAG}"'",
            "description":"'"${UPDATED_DESCRIPTION}"'"
        }'
    )

    if [ "$UPDATED_STATUS" -ne 200 ]
    then
        echo "Could not update ticket ${API_TASK_KEY}"
        exit 1
    else
        echo "Ticket updated: ${API_TASK_KEY}"
    fi

elif [ "$API_POST_ISSUE" -ne 201 ]
then
    echo "Error with creating release ticket"
    exit 1
else
    echo "Successfully created ticket"
fi

# Save our markdown to a file
echo -e $MARKDOWN > CHANGELOG.md

API_CREATE_COMMENT_URL="https://api.tracker.yandex.net/v2/issues/${API_TASK_KEY}/comments"

COMMENT_STATUS_CODE=$(curl --write-out '%{http_code}' --silent --output /dev/null --location --request POST ${API_CREATE_COMMENT_URL} -H ${AUTH_HEADER} -H ${ORG_HEADER} -H ${CONTENT_TYPE} -d @CHANGELOG.md)

if [ "$COMMENT_STATUS_CODE" -ne 201 ]
then
    echo "Error in ${API_TASK_KEY}"
    exit 1
else
    echo "Success: ${API_TASK_KEY}"
fi

rm CHANGELOG.md