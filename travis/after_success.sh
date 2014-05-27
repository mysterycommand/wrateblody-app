#!/bin/bash

if [ "${TRAVIS_BRANCH}" == "master" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ]; then

  git clone --branch=heroku https://${GH_OAUTH_TOKEN}@github.com/${GH_OWNER}/${GH_PROJECT_NAME} heroku > /dev/null

  cd heroku
  git rm -rf .
  cp -Rf ../dist/* .
  cp ../dist/.* .
  git add -f .

  git config user.email "matt@mysterycommand.com"
  git config user.name "Matt Hayes"

  git commit -am "Travis build ${TRAVIS_BUILD_NUMBER}."
  git push -fq origin heroku > /dev/null 2>&1

fi
