#! /usr/bin/bash

# firstTag=$(git tag | sort -r | head -1)
# secondTag=$(git tag | sort -r | head -2 | tail -1)
# author=$(git show ${firstTag} | grep Author: | tr -d 'Author:')
# date=$(git show ${firstTag} | grep Date: | tr -d 'Date:')

# git log ${secondTag}..${firstTag} 

#chmod +x create_ticket_script.sh



REPOSITORY_URL=https://github.com/dpavloff/build-history-layout

GIT_TAGS=$(git tag -l --sort=-version:refname)

TAGS=${GIT_TAGS}
LATEST_TAG=${TAGS[0]}
PREVIOUS_TAG=${TAGS[1]}

COMMITS=$(git log $PREVIOUS_TAG..$LATEST_TAG --pretty=format:"%H")

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
echo -e $MARKDOWN > CHANGELOG.md