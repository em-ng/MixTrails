import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => {
    return {
        formHeader: 'Create your free account',
        formType: 'Sign up',
        form: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }
}

const mDTP = dispatch => {
    return {
        action: user => dispatch(signUp(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm);