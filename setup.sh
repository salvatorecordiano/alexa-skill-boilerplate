#!/bin/bash
docker run --rm -v `pwd`/project:/alexa-skill -w /alexa-skill node:13.1.0-stretch-slim yarn
