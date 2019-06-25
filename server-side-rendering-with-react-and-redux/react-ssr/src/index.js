import 'core-js/stable';
import 'regenerator-runtime/runtime';

import express from 'express';

import render from './helpers/render';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('build/public'));

app.get('*', (req, res) => {
  const store = createStore();

  res.send(render(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
