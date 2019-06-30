#!/bin/bash

REPO=$@

publish() {
  (
    cd $1
    local name=$(cat package.json | grep name | head -n 1 | cut -d'"' -f 4)
    yarn publish $REPO --access public
  )
}

for i in ./packages/*; do publish $i; done