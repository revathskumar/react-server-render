import React from 'react';
import {Router, browserHistory, Route} from 'react-router';

import AppRoot from './app-root';
import Home from './home';
import List from './list';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppRoot}>
        <Route path="/home" component={Home}/>
        <Route path="/list" component={List}/>
      </Route>
    </Router>
  );
};

export default AppRouter;
