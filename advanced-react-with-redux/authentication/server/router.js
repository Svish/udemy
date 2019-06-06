const Authentication = require('./controllers/authentication');

const passport = require('passport');
const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = app => {
  app.get('/', requireAuth, (_, res) => res.send('index'));
  app.post('/sign-in', requireSignin, Authentication.signin);
  app.post('/sign-up', Authentication.signup);
};
