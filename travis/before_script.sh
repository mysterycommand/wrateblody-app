#!/bin/bash

if [ "${TRAVIS_BRANCH}" == "master" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ]; then

  gem update --system
  gem install sass
  npm install -g grunt-cli bower

fi
