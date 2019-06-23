const path = require('path');

const rules = [
  {
    test: /\.[jt]sx?/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
];

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: { rules },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  devServer: {
    contentBase: './',
    port: 3000,
  },
};
