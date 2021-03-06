import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user: user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    }
}

const clearSessionErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const signUp = user => dispatch => {
    return SessionAPIUtil.signUp(user)
      .then(user => dispatch(receiveCurrentUser(user)))
      .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const login = user => dispatch => {
    return SessionAPIUtil.login(user)
      .then(user => dispatch(receiveCurrentUser(user)))
      .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
      .then(() => dispatch(logoutCurrentUser()))
}

export const clearErrors = () => dispatch => {
    return dispatch(clearSessionErrors())
}