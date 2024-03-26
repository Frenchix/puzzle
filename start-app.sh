#!/bin/bash 

echo $serviceAccountKey > ./serviceAccountKey.json
echo $fullchain > ./fullchain.pem
echo $privkey > ./privkey.pem
# Start default script for NodeJS apps
npm start
