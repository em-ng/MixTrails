export const createReview = review => {
    return $.ajax ({
        method: 'post',
        url: '/api/reviews',
        data: {review: review}
    })
}

export const updateReview = review => {
    return $.ajax ({
        method: 'patch',
        url: `/api/reviews/${review.id}`,
        data: {review: review}
    })
}

export const deleteReview = reviewId => {
    return $.ajax ({
        method: 'delete',
        url: `/api/reviews/${reviewId}`
    })
}