export type Callback = () => void;

export interface Events {
  [key: string]: Callback[];
}

export type EventHandler = (eventName: string, callback: Callback) => void;

export default class Eventing {
  private readonly events: Events = {};

  public on: EventHandler = (eventName, callback) => {
    const handlers = this.events[eventName] || [];
    this.events[eventName] = [...handlers, callback];
  };

  public trigger = (eventName: string): void => {
    const handlers = this.events[eventName] || [];
    handlers.forEach(handler => handler());
  };
}
