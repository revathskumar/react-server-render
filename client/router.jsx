import React from 'react';
import {Router, browserHistory, Route} from 'react-router';

import AppRoot from './app-root.jsx';
import Home from './home.jsx';
import List from './list.jsx';

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
