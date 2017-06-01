import AppRoot from './app-root';
import Home from './home';
import List from './list';

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
      }
    ]
  }
];

export default routes;