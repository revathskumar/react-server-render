import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, browserHistory, Route} from 'react-router';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          items: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <ul>
        {this.state.items.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    );
  }
}

const App = () => {
  return (
    <div>
      <h2>React Universal App</h2>
      <List/>
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

