const Authentication = require('./controllers/authentication');

module.exports = app => {
  app.get('/', (_, res) => res.send('index'));
  app.post('/signup', Authentication.signup);
};
