# 手动部署到github
# build
yarn build
cd dist
# push to github
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:linkenpeng/intadmin.git master:gh-pages