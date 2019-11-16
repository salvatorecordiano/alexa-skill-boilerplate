#!/bin/bash
docker run --rm --name alexa-skill -v `pwd`/project:/alexa-skill -w /alexa-skill node:13.1.0-stretch-slim yarn build
cd project
rm -fr dist || true
cd ..
rm -fr deploy || true
rm deploy.zip || true
mkdir deploy
cp -R ./project/dist/* ./deploy
cd deploy && zip -r ../deploy.zip . && cd ..
rm -fr deploy || true
