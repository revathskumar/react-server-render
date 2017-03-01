import React, {Component} from 'react';

class List extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.context.data || window.__INITIAL_STATE__ || {items: []};
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
      <div className="demo-list-action mdl-list">
        {
          this.state.items.map(item => {
            return (
              <div key={item.id} className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>{item.name}</span>
                </span>
                <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
              </div>
            )
          })
        }
      </div>
    );
  }
}

List.contextTypes = {
  data: React.PropTypes.object
};

export default List;
