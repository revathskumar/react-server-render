import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory, Route} from 'react-router';

const App = () => {
  return (
    <div>
      <h2>React Universal App</h2>
    </div>
  );
};

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  );
};

render(<AppRouter/>, document.querySelector('#app'));

