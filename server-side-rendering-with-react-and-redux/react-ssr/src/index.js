import express from 'express';

import render from './helpers/render';

const app = express();

app.use(express.static('build/public'));

app.get('*', (req, res) => {
  res.send(render(req));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
