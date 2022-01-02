import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mDTP = dispatch => {
    return {
        action: user => dispatch(signUp(user))
    }
}

export default connect(null, mDTP)(SessionForm);