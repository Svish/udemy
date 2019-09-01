import 'reflect-metadata';

import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import AppRouter from './AppRouter';
import './controllers/Root';
import './controllers/Login';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['37407087-4068-4ae3-8cf1-64cb0802343b'] }));
app.use(AppRouter.getInstance());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
