import express from 'express';
import request from 'request';
import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match, createRoutes} from 'react-router';

import appRouter from '../client/router';

const routes = createRoutes(appRouter());

class DataProvider extends Component {
  getChildContext() {
    return {data: this.props.data};
  }
  render() {
    return <RouterContext {...this.props}/>;
  }
}
DataProvider.propTypes = {
  data: React.PropTypes.object
};
DataProvider.childContextTypes = {
  data: React.PropTypes.object
};

/*eslint-disable*/
const router = express.Router();
/*eslint-enable*/

/* GET home page. */
router.get('/', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps}/>);
      res.render('index', {title: 'Express', data: false, content});
    } else {
      res.status(404).send('Not Found');
    }
  });
});

router.get('/home', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps}/>);
      res.render('index', {title: 'Express', data: false, content});
    } else {
      res.status(404).send('Not Found');
    }
  });
});
router.get('/list', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      request('http://jsonplaceholder.typicode.com/users', (error, response, body) => {
        const data = {items: JSON.parse(body)};
        const content = renderToString(<DataProvider {...renderProps} data={data}/>);
        res.render('index', {title: 'Express', data, content});
      });
    } else {
      res.status(404).send('Not Found');
    }
  });
});

module.exports = router;
