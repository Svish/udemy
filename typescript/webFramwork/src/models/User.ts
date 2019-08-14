import Model from './Model';

import Attributes from './Attributes';
import Eventing from './Eventing';
import ApiSync from './ApiSync';
import Collection from './Collection';

export interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

const BASE_URL = 'http://localhost:3001/users';

export default class User extends Model<UserData> {
  static createCollection(): Collection<User, UserData> {
    return new Collection(BASE_URL, User.create);
  }

  static create(data: UserData): User {
    return new User(
      new Attributes<UserData>(data),
      new Eventing(),
      new ApiSync(BASE_URL, 'id')
    );
  }

  isAdmin(): boolean {
    return this.get('id') === 1;
  }
}
