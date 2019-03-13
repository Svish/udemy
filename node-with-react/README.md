# Node with React

Code from going through the [Node with React: Fullstack Web Development](https://www.udemy.com/node-with-react-fullstack-web-development/) course at [Udemy](https://www.udemy.com).

- **Section 1:** Course Overview
- **Section 2:** Server Side Architecture
- **Section 3:** Authentication with [Google OAuth](https://console.developers.google.com/apis/credentials)

## Configuration (`.env`)

```
PORT=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

## Deployment to Heroku

```console
# Setup
heroku login
heroku create
git remote add heroku/node-with-react https://git.heroku.com/{heroku-app-id}.git

# Deploy
cd node-with-react/server
npm run deploy
```
