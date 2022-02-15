import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { deleteReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';

// const mSTP = (state) => {
//     return {
//         user: state.session.currentUserId
//     }
// }

const mDTP = dispatch => {
    return {
        // deleteReview: reviewId => dispatch(deleteReview(reviewId)),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(null, mDTP)(ReviewIndex);