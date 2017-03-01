import React from 'react';
import {render} from 'react-dom';
// import {Router, history, match} from 'react-router';

import AppRouter from './router';

// match({history, routes}, (error, redirectLocation, renderProps) => {
// //   render(<Router {...renderProps}/>, document.querySelector('#app'));
// });
render(<AppRouter/>, document.querySelector('#app'));

