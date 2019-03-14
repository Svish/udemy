## Configuration (`.env`)

```
PORT=
COOKIE_ENCRYPTION_KEY=
```

**[Google OAuth](https://console.developers.google.com/apis/credentials)**

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

**[MongoDB](https://cloud.mongodb.com)**

```
MONGO_DB_URI=
```

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
