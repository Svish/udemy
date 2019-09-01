import { RequestHandler } from 'express';

import AppRouter from '../../AppRouter';

import Methods from './Methods';
import Metadata from './Metadata';

const validateBody = (keys: string[]): RequestHandler => (req, res, next) => {
  if (!req.body) {
    res.status(422).send('Invalid request: Missing request body');
    return;
  }

  for (const key of keys) {
    if (!req.body[key]) {
      res.status(422).send(`Invalid request: Missing key "${key}"`);
      return;
    }
  }

  next();
};

export default (pathPrefix: string) => (target: Function) => {
  const router = AppRouter.getInstance();
  for (const key in target.prototype) {
    const routeHandler = target.prototype[key];
    const path: string = Reflect.getMetadata(
      Metadata.Path,
      target.prototype,
      key
    );
    const method: Methods = Reflect.getMetadata(
      Metadata.Method,
      target.prototype,
      key
    );
    const middlewares: RequestHandler[] =
      Reflect.getMetadata(Metadata.Middlewares, target.prototype, key) || [];

    const requiredBodyProps: string[] =
      Reflect.getMetadata(Metadata.Validator, target.prototype, key) || [];

    if (requiredBodyProps.length) {
      middlewares.push(validateBody(requiredBodyProps));
    }

    if (path) {
      router[method](`${pathPrefix}${path}`, ...middlewares, routeHandler);
    }
  }
};
