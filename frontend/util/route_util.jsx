import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter} from 'react-router-dom';

const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.currentUserId)
    }
}

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

export const AuthRoute = withRouter(connect(mSTP)(Auth));
