import 'core-js/stable';
import 'regenerator-runtime/runtime';

import express from 'express';
import favicon from 'serve-favicon';

import { matchRoutes } from 'react-router-config';
import routes from './client/routes';

import render from './helpers/render';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('build/public'));
app.use(favicon('src/favicon.ico'));

app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(routes, req.path).map(
    ({ route }) => route.loadData && route.loadData(store)
  );

  Promise.all(promises).then(() => {
    res.send(render(req, store));
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
