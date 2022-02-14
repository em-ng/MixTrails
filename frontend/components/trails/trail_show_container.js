import { connect } from 'react-redux';
import { fetchTrail } from '../../actions/trail_actions';
import TrailShow from './trail_show';

const mSTP = (state, ownProps) => {
    // debugger
    return {
        trail: state.entities.trails[ownProps.match.params.trailId],
        currentUser: state.session.currentUserId
    }
}

const mDTP = dispatch => {
    return {
        fetchTrail: trailId => dispatch(fetchTrail(trailId))
    }
}

export default connect(mSTP, mDTP)(TrailShow);