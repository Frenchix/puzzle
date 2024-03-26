#!/bin/bash 

mkdir cert
echo $serviceAccountKey > ./serviceAccountKey.json
echo $fullchain | base64 -d > ./cert/fullchain.pem
echo $privkey | base64 -d > ./cert/privkey.pem
# Start default script for NodeJS apps
npm start
