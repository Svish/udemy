# Node with React

Code from going through the [Node with React: Fullstack Web Development](https://www.udemy.com/node-with-react-fullstack-web-development/) course at [Udemy](https://www.udemy.com).

- **Section 1:** Course Overview
- **Section 2:** Server Side Architecture
- **Section 3:** Authentication with Google OAuth
- **Section 4:** Adding MongoDB
- **Section 5:** Dev vs Prod Environments
- **Section 6:** Moving to the Client Side
- **Section 7:** Developing the Client Side
- **Section 8:** Handling Payments
- **Section 9:** Back End to Front End Routing in Production
- **Section 10:** Mongoose for Survey Creation
- **Section 11:** Back to the Client!
- **Section 12:** Handling Webhook Data

## Dependencies

- [Google OAuth](https://console.developers.google.com/apis/credentials)
- [MongoDB Atlas](https://cloud.mongodb.com)
- [Heroku](https://dashboard.heroku.com)
- [Stripe](https://dashboard.stripe.com)

## Development

```console
npm install && npm run dev
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
