const proxy = require('http-proxy-middleware');

const path = ['/auth/google', '/api'];
const backend = { target: 'http://localhost:5000' };

module.exports = function(app) {
  app.use(proxy(path, backend));
};
