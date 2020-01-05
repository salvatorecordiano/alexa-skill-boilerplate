yarn build
mkdir /deploy
cp -R /alexa-skill/dist/* /deploy
cd /deploy && zip -r /project-root/deploy.zip . && rm -fr /deploy
echo "deploy.zip ready to be uploaded on AWS!"
