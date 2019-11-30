#!/bin/bash
rm -fr deploy || true
rm -fr project/dist || true
mkdir -p project/dist && touch project/dist/.gitkeep
docker run --rm -v `pwd`/project:/alexa-skill -w /alexa-skill node:13.1.0-stretch-slim yarn build
mkdir deploy
cp -R ./project/dist/* ./deploy
cd deploy && zip -r ../deploy.zip . && cd ..
rm -fr deploy || true
