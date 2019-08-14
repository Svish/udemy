import 'regenerator-runtime/runtime';

import Collection from './models/Collection';
import User from './models/User';

const collection = User.createCollection();
collection.fetch();
