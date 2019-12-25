#!/bin/env bash
set -x

echo "Hello world."

npx firebase deploy --project minutebox-labs --only hosting --debug
