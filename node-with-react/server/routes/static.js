const express = require('express');
const { resolve } = require('app-root-path');

module.exports = app => {
  app.use(express.static(resolve('client/build')));
  app.get('*', (req, res) => {
    res.sendFile(resolve('/client/build/index.html'));
  });
};
