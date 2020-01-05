.PHONY: setup build container-bash

setup:
	docker pull salvatorecordiano/alexa-skill-boilerplate:node-13.5
	docker run --rm -v `pwd`/project:/alexa-skill salvatorecordiano/alexa-skill-boilerplate:node-13.5 yarn

build:
	docker run --rm -v `pwd`/project:/alexa-skill -v `pwd`/:/project-root salvatorecordiano/alexa-skill-boilerplate:node-13.5 /alexa-script/build.sh

container-bash:
	docker run -it --rm --name alexa-skill -v `pwd`/project:/alexa-skill -v `pwd`/:/project-root salvatorecordiano/alexa-skill-boilerplate:node-13.5 bash

docker-build:
	docker build ./docker -t salvatorecordiano/alexa-skill-boilerplate:node-13.5

docker-push:
	docker push salvatorecordiano/alexa-skill-boilerplate:node-13.5
