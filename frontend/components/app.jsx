import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';
import Footer from './footer/footer';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Switch>
        <Route exact path='/' component={HomeContainer}/>
        <AuthRoute path='/signup' component={SignUpFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
    </Switch>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;