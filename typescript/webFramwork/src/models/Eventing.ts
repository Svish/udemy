export type Callback = () => void;

export default class Eventing {
  private readonly events: { [key: string]: Callback[] } = {};

  public on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    this.events[eventName] = [...handlers, callback];
  };

  public trigger = (eventName: string): void => {
    const handlers = this.events[eventName] || [];
    handlers.forEach(handler => handler());
  };
}
