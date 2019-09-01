import View, { Events } from './View';
import User from '../models/User';

export default class UserForm extends View<User> {
  protected template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">Set Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save</button>
      </div>
    `;
  }

  protected events(): Events {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveModelClick,
    };
  }

  private onSaveModelClick = (): void => {
    this.model.save();
  };

  private onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  private onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      this.model.set({ name: input.value });
    }
  };
}
