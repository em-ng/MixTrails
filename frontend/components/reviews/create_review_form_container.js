import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
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
    return {
        action: review => dispatch(createReview(review)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(ReviewForm);