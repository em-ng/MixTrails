import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchTrail } from '../../actions/trail_actions';

const mSTP = (state, ownProps) => {
    debugger
    return {
        // review: state.entities.reviews[ownProps.match.params.reviewId],
        review: {
            id: ownProps.review.id,
            user_id: ownProps.review.user_id,
            trail_id: ownProps.review.trail_id,
            activity_date: ownProps.review.activity_date,
            review_text: ownProps.review.review_text,
            rating: ownProps.review.rating
        },
        formType: 'update',
        trail: state.entities.trails[ownProps.match.params.trailId]
    }
}

const mDTP = dispatch => {
    return {
        action: review => dispatch(updateReview(review)),
        closeModal: () => dispatch(closeModal()),
        fetchTrail: trailId => dispatch(fetchTrail(trailId))
    }
}

export default withRouter(connect(mSTP, mDTP)(ReviewForm));

// class EditReviewForm extends React.Component {
//     componentDidMount() {
//         this.props.review
//     }

//     render() {
//         const { action, review } = this.props;
//         debugger

//         if (!review) return null;

//         return(
//             <ReviewForm
//                 action = {action}
//                 formType = {formType}
//                 review={review}
//             />
//         )
//     }
// }

// export default withRouter(connect(mSTP, mDTP)(EditReviewForm));

