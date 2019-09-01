import { Router, Request, Response, NextFunction } from 'express';

interface PostRequest extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403).send('You must be logged in');
  }
}

const router = Router();

router.get('/login', (_, res) => {
  res.send(`
    <form method="POST">
      <div>
        <label for="email">Email</label>
        <input id="email" name="email" type="email">
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" name="password" type="password">
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post('/login', (req: PostRequest, res) => {
  const { email, password } = req.body;

  if (
    email &&
    password &&
    email === 'me@example.com' &&
    password === 'foobar'
  ) {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.status(400).send('Unknown credentials');
  }
});

router.get('/logout', (req, res) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (_, res) => {
  res.send('Welcome to protected route, logged in user');
});

router.get('/', (req, res) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <p>You are logged in</p>
        <p>
          <a href="/protected">Protected area</a>
          <a href="/logout">Logout</a>
        </p>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <p>You are not logged in</p>
        <p>
          <a href="/login">Login</a>
        </p>
      </div>
    `);
  }
});

export default router;
