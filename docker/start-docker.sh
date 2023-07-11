#!/bin/bash
set -e
sudo docker run -d -p 3200:3100 -e GIT_URL="https://tufpsj:2020%40audit@git.yonyouaud.com/a8/a8-dev-docs.git" -e GIT_BRANCH="master" --name a8-dev-docs nextra:latest