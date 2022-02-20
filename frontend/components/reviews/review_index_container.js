import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { withRouter } from 'react-router-dom';
import { deleteReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        user: state.session.currentUserId,
        review: ownProps.review
    }
}

const mDTP = dispatch => {
    return {
        // deleteReview: reviewId => dispatch(deleteReview(reviewId)),
        // openModal: modal => dispatch(openModal(modal))
    }
}

export default withRouter(connect(mSTP)(ReviewIndex));