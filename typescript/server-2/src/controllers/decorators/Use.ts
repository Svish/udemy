import { RequestHandler } from 'express';
import Metadata from './Metadata';

export default (middleware: RequestHandler) => (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => {
  const middlewares =
    Reflect.getMetadata(Metadata.Middlewares, target, key) || [];
  Reflect.defineMetadata(
    Metadata.Middlewares,
    [...middlewares, middleware],
    target,
    key
  );
};
