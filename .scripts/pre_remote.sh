#!/bin/bash

cd /opt && \
  git init --bare blueblood.git && \
  git clone blueblood.git blueblood

cp /root/.scripts/post-receive /opt/blueblood.git/hooks
chmod ug+x /opt/blueblood.git/hooks/post-receive
cp /root/.scripts/.env /opt/blueblood
