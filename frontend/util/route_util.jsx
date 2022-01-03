import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter} from 'react-router-dom';

const Auth = ({ loggedIn, path, component: Component, exact }) => {
    return (
        <Route
          path={path}
          exact={exact}
          render={props => (
              loggedIn ? <Redirect to='/' /> : <Component {...props} />
          )}
        />
    )
}

const Protected = ({ loggedIn, path, component: Component, exact }) => {
    return (
        <Route
          path={path}
          exact={exact}
          render={props => (
              loggedIn ? <Component {...props} /> : <Redirect to='/login' />
          )}
        />
    )
}

const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.currentUserId)
    }
}

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
