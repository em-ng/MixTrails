import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => {
    return {
        formHeader: "Log in and let's get going",
        formType: 'Log in',
        nullUser: {
            email: '',
            password: ''
        },
        text: "Don't have an account?",
        link: <Link to='/signup' className='session-link'>Sign up for free</Link>,
        errors: state.errors.session
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm);