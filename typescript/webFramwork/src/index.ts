import 'regenerator-runtime/runtime';

import UserEdit from './views/UserEdit';
import User from './models/User';
import UserList from './views/UserList';

{
  const root = document.getElementById('root')!;
  const user = User.create({ name: 'Alice', age: 20 });
  new UserEdit(root, user).render();
}

{
  const root = document.getElementById('collection-root')!;
  const users = User.createCollection();
  users.fetch().then(() => {
    new UserList(root, users).render();
  });
}
