const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

const clientConfig = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build', 'public'),
  },
};

module.exports = merge(baseConfig, clientConfig);
