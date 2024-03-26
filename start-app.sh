#!/bin/bash 

mkdir cert
echo $serviceAccountKey > ./serviceAccountKey.json
echo $fullchain > ./cert/fullchain.pem
echo $privkey > ./cert/privkey.pem
# Start default script for NodeJS apps
npm start
