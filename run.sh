#!/bin/env bash
set -x

echo "Hello world."
npm i firebase

npx firebase deploy --project minutebox-labs --only hosting 