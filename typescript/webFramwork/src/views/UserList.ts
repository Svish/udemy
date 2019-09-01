import CollectionView from './CollectionView';
import User, { UserData } from '../models/User';
import UserShow from './UserShow';

export default class UserList extends CollectionView<User, UserData> {
  protected renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
