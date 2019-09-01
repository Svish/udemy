export default class Attributes<T> {
  private readonly data: T;

  constructor(data: T) {
    this.data = { ...data };
  }

  public get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  public set = (update: Partial<T>): void => {
    Object.assign(this.data, update);
  };

  public getAll(): Readonly<T> {
    return this.data;
  }
}
