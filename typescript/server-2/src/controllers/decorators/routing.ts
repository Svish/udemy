import Methods from './Methods';
import Metadata from './Metadata';
import { RequestHandler } from 'express';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

const routeBinder = (method: string) => (path: string) => (
  target: any,
  key: string,
  _: RouteHandlerDescriptor
) => {
  Reflect.defineMetadata(Metadata.Path, path, target, key);
  Reflect.defineMetadata(Metadata.Method, method, target, key);
};

export const Get = routeBinder(Methods.Get);
export const Put = routeBinder(Methods.Put);
export const Post = routeBinder(Methods.Post);
export const Patch = routeBinder(Methods.Patch);
export const Delete = routeBinder(Methods.Delete);
