import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function isLoggedIn() {
  // sprawdzić czy user zalogowany:
  // W loginPage cos zrobić, jakos przesłać info i na tej podstawie true/false
  return true;
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