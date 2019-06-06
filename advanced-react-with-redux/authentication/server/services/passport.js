const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');

const User = require('../models/user');

// Create local strategy
const localOptions = {
  usernameField: 'email',
};

const localStrategy = new LocalStrategy(
  localOptions,
  (email, password, done) => {
    User.findOne({ email }, (err, user) => {
      if (err) return done(err, false);
      if (!user) return done(null, false);

      user.comparePassword(password, (err, isMatch) => {
        if (err) return done(err, false);
        if (!isMatch) return done(null, false);
        return done(null, user);
      });
    });
  }
);

passport.use(localStrategy);

// Create JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.TOKEN_SECRET,
};

const jwtStrategy = new Strategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtStrategy);
