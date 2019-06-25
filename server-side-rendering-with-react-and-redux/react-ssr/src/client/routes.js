import App from './App';
import NotFound from './pages/NotFound';

import Home from './pages/Home';
import Users from './pages/Users';
import Admins from './pages/Admins';

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...Users,
        path: '/users',
      },
      {
        ...Admins,
        path: '/admins',
      },
      {
        ...NotFound,
      },
    ],
  },
];
