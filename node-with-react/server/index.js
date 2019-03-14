// Mongoose
require('./services/mongoose');

// Passport
require('./services/passport');

// Express
const cookieSession = require('cookie-session');
const passport = require('passport');
const express = require('express');
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_ENCRYPTION_KEY],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);

app.listen(process.env.PORT);

