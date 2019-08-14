import { AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  getAll(): Readonly<T>;
  set(update: Partial<T>): void;
}

interface Sync<T> {
  fetch(key: number): Promise<AxiosResponse<T>>;
  save(data: T): Promise<AxiosResponse<T>>;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface Data {
  id?: number;
}

export default abstract class Model<T extends Data> {
  constructor(
    private readonly attributes: ModelAttributes<T>,
    private readonly events: Events,
    private readonly sync: Sync<T>
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;

  get = this.attributes.get;
  set(update: Partial<T>) {
    this.attributes.set(update);
    this.trigger('change');
  }

  async fetch(): Promise<void> {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    try {
      const response = await this.sync.fetch(id);
      this.set(response.data);
    } catch (e) {
      console.warn(e);
      this.trigger('error');
    }
  }
  async save(): Promise<void> {
    try {
      const response = await this.sync.save(this.attributes.getAll());
      this.attributes.set(response.data);
      this.trigger('save');
    } catch (e) {
      console.warn(e);
      this.trigger('error');
    }
  }
}
