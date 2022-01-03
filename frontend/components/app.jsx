import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Switch>
        <AuthRoute path='/signup' component={SignUpFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
    </Switch>
  </div>
);

export default App;