const next = require('next');
const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });

const AUTH_USER_TYPE = 'authenticated';
const COOKIE_SECRET = '2439322e-da01-4e3e-b7ca-5e741e63a0b4';
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: !dev,
  signed: true,
};

const getUsers = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  data.push({
    ...data[0],
    email: 'test@example.com',
    name: 'Tester',
    website: 'example.com',
  });

  return data;
};

const authenticate = async (email, password) => {
  const users = await getUsers();
  return users.find(user => {
    if (user.email === email && user.website === password) return user;
  });
};

app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(cookieParser(COOKIE_SECRET));

  server.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await authenticate(email, password);

    if (!user) {
      return res.status(403).send('Invalid credentials');
    }

    const userData = {
      name: user.name,
      email: user.email,
      type: AUTH_USER_TYPE,
    };

    res.cookie('token', userData, COOKIE_OPTIONS);
    res.json(userData);
  });

  server.get('/api/profile', async (req, res) => {
    const { signedCookies = {} } = req;
    const { token } = signedCookies;

    if (token && token.email) {
      const users = await getUsers();
      const profile = users.find(user => user.email === token.email);

      return res.json({ user: profile });
    } else {
      return res.sendStatus(404);
    }
  });

  server.get('*', (req, res) => {
    return app.getRequestHandler()(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});
