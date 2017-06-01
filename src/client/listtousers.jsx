import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ListToUsers = () => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 302;
      }
      return <Redirect from="/list" to="/users" />
    }}/>
  );
};

export default ListToUsers;