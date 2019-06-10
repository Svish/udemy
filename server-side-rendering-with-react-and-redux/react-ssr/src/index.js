import express from 'express';

import render from './helpers/render';

const app = express();

app.use(express.static('build/public'));

app.get('/', (_, res) => {
  res.send(render());
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
