import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    debugger
    return {
        review: {
            rating: null,
            activity_date: new Date().toString(),
            review_text: '',
            user_id: state.session.currentUserId,
            trail_id: ownProps.match.params.trailId
        },
        // formType: 'Create Review',
        user: state.session.currentUserId,
        trail: state.entities.trails[ownProps.match.params.trailId]
    }
}

const mDTP = dispatch => {
    debugger
    return {
        action: review => dispatch(createReview(review)),
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mSTP, mDTP)(ReviewForm));