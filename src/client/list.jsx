import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import 'isomorphic-fetch';

import { fetchUsers } from './modules/users';

class List extends Component {
  static fetchData(store) {
    return store.dispatch(fetchUsers());
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="demo-list-action mdl-list">
        {
          this.props.items.map(item => {
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

const mapStateToProps = (state) => ({items: state.users.items});
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
