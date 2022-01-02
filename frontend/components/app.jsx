import React from 'react';
import { Route, Switch } from "react-router-dom";
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
  <div>
    <header>
        <h1>hello ^-^, I am working!</h1>
    </header>
    <Switch>
        <Route path='/signup' component={SignUpFormContainer} />
        <Route path='/login' component={LoginFormContainer} />
    </Switch>
  </div>
);

export default App;