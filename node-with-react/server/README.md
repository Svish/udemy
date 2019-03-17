## Deployment to [Heroku](https://devcenter.heroku.com/articles/heroku-cli)

```console
# Setup
heroku login
heroku create
git remote add heroku/node-with-react https://git.heroku.com/{heroku-app-id}.git

# Deploy
cd node-with-react/server
npm run deploy
```
