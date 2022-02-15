import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchTrail } from '../../actions/trail_actions';

const mSTP = (state, ownProps) => {
    debugger
    return {
        review: {
            rating: 0,
            activity_date: new Date().toString(),
            review_text: '',
            user_id: state.session.currentUserId,
            trail_id: ownProps.match.params.trailId
        },
        formType: 'create',
        user: state.session.currentUserId,
        trail: state.entities.trails[ownProps.match.params.trailId]
    }
}

const mDTP = dispatch => {
    debugger
    return {
        action: review => dispatch(createReview(review)),
        closeModal: () => dispatch(closeModal()),
        fetchTrail: trailId => dispatch(fetchTrail(trailId))
    }
}

export default withRouter(connect(mSTP, mDTP)(ReviewForm));