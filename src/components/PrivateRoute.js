import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLoggedIn = () => {
  const token = JSON.parse(localStorage.getItem('state'));
  return (token?.user);
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isLoggedIn() ?
        <Component {...props} />
        : <Redirect to="/" />
    )} />
  );
};

export default PrivateRoute;