import { Request, Response } from 'express';

import { Controller, Get, Post, ValidateBody } from './decorators';

interface LoginRequest extends Request {
  body: {
    email?: string;
    password?: string;
  };
}

@Controller('/auth')
export default class LoginController {
  @Get('/login')
  getLogin(_: Request, res: Response): void {
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
  }

  @Post('/login')
  @ValidateBody('email', 'password')
  postLogin(req: LoginRequest, res: Response) {
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
  }

  @Get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
