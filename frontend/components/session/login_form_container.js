import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => {
    return {
        formHeader: "Log in and let's get going",
        formType: 'Log in',
        nullUser: {
            email: '',
            password: ''
        },
        errors: state.errors.session
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm);