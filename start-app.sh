#!/bin/bash 

mkdir cert
echo $serviceAccountKey > ./serviceAccountKey.json
echo $FULLCHAIN | base64 -d > ./cert/fullchain.pem
echo $PRIVKEY | base64 -d > ./cert/privkey.pem
# Start default script for NodeJS apps
npm start
