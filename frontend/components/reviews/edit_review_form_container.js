import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchTrail } from '../../actions/trail_actions';

const mSTP = (state, ownProps) => {
    return {
        review: state.reviews[ownProps.match.params.reviewId],
        formType: 'Update Review'
    }
}

const mDTP = dispatch => {
    return {
        action: review => dispatch(updateReview(review)),
        closeModal: () => dispatch(closeModal()),
        fetchTrail: trailId => dispatch(fetchTrail(trailId))
    }
}

export default connect(mSTP, mDTP)(ReviewForm);

// class EditReviewForm extends React.Component {
//     componentDidMount {

//     }

//     render() {
//         const { action, formType, review } = this.props;

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