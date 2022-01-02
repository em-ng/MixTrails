import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => {
    return {
        formHeader: 'Create your free account',
        formType: 'Sign up',
        nullUser: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        errors: state.errors.session
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signUp(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm);