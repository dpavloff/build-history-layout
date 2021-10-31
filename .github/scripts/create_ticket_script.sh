#! /usr/bin/bash
REPOSITORY_URL=https://github.com/dpavloff/build-history-layout

GIT_TAGS=$(git tag -l --sort=-version:refname)

TAGS=${GIT_TAGS}
LATEST_TAG=${TAGS[0]}
PREVIOUS_TAG=${TAGS[1]}
AUTHOR=$(git show ${LATEST_TAG} | grep Author: | head -1)
DATE=$(git show ${LATEST_TAG} | grep Date: | head -1)
UNIQUE="dpavloff/build-history-layout - master ${LATEST_TAG}"

COMMITS=$(git log $PREVIOUS_TAG..$LATEST_TAG --pretty=format:"%H")

YANDEX_ISSUES="https://api.tracker.yandex.net/v2/issues/"
YANDEX_ISSUES_SEARCH="https://api.tracker.yandex.net/v2/issues/_search"

AUTH_HEADER="Authorization: Oauth: ${OAuth}"
ORG_HEADER="X-Org-Id: ${OrganizationId}"
CONTENT_TYPE="Content-Type: application/json"

API_POST_ISSUE=(curl -X POST https://api.tracker.yandex.net/v2/issues
--silent
-H ${AUTH_HEADER} \
-H ${ORG_HEADER} \
-H ${CONTENT_TYPE} \
--data-raw '{
	"queue": "TMP",
    "summary": "Adding issue for commit "'${LATEST_TAG}',
    "type": "task",
    "assignee": '${AUTHOR}' \ '${DATE}' \ - '${LATEST_TAG}',
    "unique": '${UNIQUE}'
}'
)

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

# Save our markdown to a file
stdout -e $MARKDOWN