import 'core-js/stable';
import 'regenerator-runtime/runtime';

import express from 'express';
import proxy from 'express-http-proxy';
import favicon from 'serve-favicon';

import { matchRoutes } from 'react-router-config';
import routes from './client/routes';

import render from './helpers/render';
import createStore from './helpers/createStore';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator: (opts, req) => {
      opts.headers['x-forwarded-host'] = `${req.hostname}:${PORT}`;
      return opts;
    },
  })
);
app.use(express.static('build/public'));
app.use(favicon('src/favicon.ico'));

app.get('**', (req, res) => {
  const store = createStore(req);

  const loading = matchRoutes(routes, req.path)
    .map(({ route }) => route.loadData && route.loadData(store))
    .map(
      promise =>
        promise &&
        new Promise((resolve, _) => {
          promise.then(resolve).catch(resolve);
        })
    );

  Promise.all(loading).then(() => {
    const context = {};
    const content = render(req, store, context);

    if (context.url) {
      return res.redirect(context.status || 301, context.url);
    }

    res.status(context.status || 200).send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
