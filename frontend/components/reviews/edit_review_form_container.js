import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchTrail } from '../../actions/trail_actions';

const mSTP = (state, ownProps) => {
    return {
        review: state.reviews[ownProps.match.params.reviewId]
        // formType: 'Update Review'
    }
}

const mDTP = dispatch => {
    return {
        action: review => dispatch(updateReview(review)),
        closeModal: () => dispatch(closeModal()),
        fetchTrail: trailId => dispatch(fetchTrail(trailId))
    }
}

class EditReviewForm extends React.Component {
    componentDidMount() {
        this.props.review
    }

    render() {
        const { action, review } = this.props;

        if (!review) return null;

        return(
            <ReviewForm
                action = {action}
                // formType = {formType}
                review={review}
            />
        )
    }
}

export default connect(mSTP, mDTP)(EditReviewForm);

