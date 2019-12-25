#!/bin/env bash
set -x

echo "Hello world."
npm i firebase

echo "CLO?UD CREDS:: $GOOGLE_APPLICATION_CREDENTIALS / $FIREBASE_TOKEN"

npx firebase deploy --project minutebox-labs --only hosting 
