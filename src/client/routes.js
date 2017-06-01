import AppRoot from './app-root';
import Home from './home';
import List from './list';
import NotFound from './notfound';

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