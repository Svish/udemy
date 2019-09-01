import View from './View';
import User from '../models/User';

export default class UserShow extends View<User> {
  template(): string {
    return `
      <div>
        <h1>User details</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
      </div>
    `;
  }
}
