#!/usr/bin/bash 

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# add .nojekyll to bypass GitHub Page’s default behavior
touch .nojekyll

# get back to the prior directory
cd ..

# deploy the site
npx gh-pages -d dist