const User = require('../models/user');
const jwt = require('jwt-simple');

const tokenForUser = user =>
  jwt.encode(
    {
      sub: user.id,
      iat: new Date().getTime(),
    },
    process.env.TOKEN_SECRET
  );

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'The email and password cannot be empty' });
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is already in use' });
    }

    const user = new User({
      email,
      password,
    });

    user.save(err => {
      if (err) {
        return next(err);
      }

      res.json({ token: tokenForUser(user) });
    });
  });
};
