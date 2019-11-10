#!/bin/bash
docker run --rm --name alexa-skill -v `pwd`/project:/alexa-skill -w /alexa-skill node:13.1.0-stretch-slim yarn
