#!/bin/bash
set -e
# git pull from remote, url from env GIT_URL, branch from env GIT_BRANCH
cd /
git clone -b ${GIT_BRANCH} ${GIT_URL} /app
cd /app
# install dependencies
npm install
# start app from `ecosystem.config.js` with pm2
pm2-runtime start ecosystem.config.js