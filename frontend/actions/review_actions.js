import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review: review
    }
}

const removeReview = reviewId => {
    return {
        type: REMOVE_REVIEW,
        reviewId: reviewId
    }
}

export const createReview = review => dispatch => {
    return ReviewAPIUtil.createReview(review)
      .then(review => dispatch(receiveReview(review)))
}

export const updateReview = review => dispatch => {
    return ReviewAPIUtil.updateReview(review)
      .then(review => dispatch(receiveReview(review)))
}

export const deleteReview = reviewId => dispatch => {
    return ReviewAPIUtil.deleteReview(reviewId)
      .then(() => dispatch(removeReview(reviewId)))
}