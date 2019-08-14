import Eventing from './Eventing';

import axios from 'axios';

export default class Collection<T, D> {
  private readonly models: T[] = [];
  private readonly events: Eventing = new Eventing();

  constructor(
    private readonly baseUrl: string,
    private readonly deserialize: (data: D) => T
  ) {}

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }

  public async fetch(): Promise<void> {
    const response = await axios.get<D[]>(this.baseUrl);
    response.data
      .map(data => this.deserialize(data))
      .forEach(user => this.models.push(user));

    this.trigger('change');
  }
}
