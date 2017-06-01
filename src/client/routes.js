import AppRoot from './app-root';
import Home from './home';
import List from './list';
import NotFound from './notfound';
import ListToUsers from './listtousers';

const routes = [
  { component: AppRoot,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
      { path: '/list',
        component: ListToUsers
      },
      { path: '/users',
        component: List
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;