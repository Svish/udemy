import View, { Regions, RegionElements } from './View';
import User from '../models/User';
import UserShow from './UserShow';
import UserForm from './UserForm';

export default class UserEdit extends View<User> {
  protected template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
      `;
  }

  protected regions(): Regions {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  protected onRender(regionElements: RegionElements): void {
    new UserShow(regionElements['userShow'], this.model).render();
    new UserForm(regionElements['userForm'], this.model).render();
  }
}
