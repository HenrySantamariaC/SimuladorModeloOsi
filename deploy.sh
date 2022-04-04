#!/usr/bin/env sh fwef

set -e

git add -A
git commit -m $1
git push -f git@github.com:HenrySantamariaC/SimuladorModeloOsi.git

npm run build

cd dist

git init
git add -A
git commit -m 'Despliegue'
git push -f git@github.com:HenrySantamariaC/SimuladorModeloOsi.git master:gh-pages

cd -
