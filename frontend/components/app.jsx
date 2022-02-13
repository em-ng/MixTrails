import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';
import ParkShowContainer from './parks/park_show_container';
import TrailShowContainer from './trails/trail_show_container';
// import SearchBarContainer from './search/search_bar_container';
import Footer from './footer/footer';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Switch>
        <AuthRoute path='/signup' component={SignUpFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <Route path='/parks/:parkId' component={ParkShowContainer} />
        <Route path='/trails/:trailId' component={TrailShowContainer} />
        <Route exact path='/' component={HomeContainer}/>
    </Switch>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;