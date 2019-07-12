const express = require('express');
const app = express();

//Server routes...
app.get('/hello', (req, res) => res.send({ hi: 'there' }));

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackMiddleWare = require('webpack-dev-middleware');
  const webpackConfig = require('./webpack.config');
  app.use(webpackMiddleWare(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

const port = process.env.PORT || 3050;
app.listen(port, () => console.log('Listening on :' + port));
