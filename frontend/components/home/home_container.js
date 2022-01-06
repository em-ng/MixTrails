import { connect } from 'react-redux';
import Home from './home';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
    }
}

export default connect(mSTP)(Home);