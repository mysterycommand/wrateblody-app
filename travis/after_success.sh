#!/bin/bash

if [ "${TRAVIS_BRANCH}" == "master" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ]; then

  git clone https://${GH_OAUTH_TOKEN}@github.com/${GH_OWNER}/${GH_PROJECT_NAME} site > /dev/null 2>&1
  cd site
  if git checkout heroku; then git checkout --orphan heroku; fi
  git rm -r .
  cp -R ../dist/* .
  cp ../dist/.* .
  git add -f .
  git config user.email "matt@mysterycommand.com"
  git config user.name "Matt Hayes"
  git commit -am "Travis build ${TRAVIS_BUILD_NUMBER}."
  git push https://${GH_OAUTH_TOKEN}@github.com/${GH_OWNER}/${GH_PROJECT_NAME} HEAD:heroku > /dev/null 2>&1

fi
