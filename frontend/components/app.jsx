import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/signup' component={SignUpFormContainer} />
        <Route path='/login' component={LoginFormContainer} />
    </Switch>
  </div>
);

export default App;