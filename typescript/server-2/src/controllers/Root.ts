import { Request, Response, RequestHandler } from 'express';

import { Controller, Get, Use } from './decorators';

const requireAuth: RequestHandler = (req, res, next): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403).send('You must be logged in');
  }
};

@Controller('')
export default class RootController {
  @Get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <p>You are logged in</p>
          <p>
            <a href="/protected">Protected area</a>
            <a href="/auth/logout">Logout</a>
          </p>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <p>You are not logged in</p>
          <p>
            <a href="/auth/login">Login</a>
          </p>
        </div>
      `);
    }
  }

  @Get('/protected')
  @Use(requireAuth)
  get(_: Request, res: Response) {
    res.send(`
      <div>
        <p>Welcome to protected route, logged in user!</p>
        <p>
          <a href="/">Home</a>
        </p>
      </div>
    `);
  }
}
