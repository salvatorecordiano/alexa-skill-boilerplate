FROM node:13.5-stretch-slim

RUN set -ex \
    && apt-get update \
    && apt-get install -y zip \
    && apt-get purge -y --auto-remove

COPY ./build.sh /alexa-script/build.sh

RUN yarn global add typescript
WORKDIR /alexa-skill
