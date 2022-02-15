import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTrail } from '../../actions/trail_actions';
import { openModal } from '../../actions/modal_actions';
import { deleteReview } from '../../actions/review_actions'
import TrailShow from './trail_show';

const mSTP = (state, ownProps) => {
    return {
        trail: state.entities.trails[ownProps.match.params.trailId],
        currentUser: state.session.currentUserId
    }
}

const mDTP = dispatch => {
    return {
        fetchTrail: trailId => dispatch(fetchTrail(trailId)),
        openModal: modal => dispatch(openModal(modal)),
        deleteReview: reviewId => dispatch(deleteReview(reviewId))
    }
}

export default withRouter(connect(mSTP, mDTP)(TrailShow));