import Metadata from './Metadata';

export default (...keys: string[]) => (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => {
  Reflect.defineMetadata(Metadata.Validator, keys, target, key);
};
