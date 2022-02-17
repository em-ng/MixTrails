import React from 'react';
import ReactStars from 'react-rating-stars-component';
// import ReviewIndexItem from './review_index_item';

const ReviewIndex = ({reviews, currentUser, openModal, deleteReview}) => {

    return(
        <>
            {reviews.map((review) => (
            <div className="reviews-container" key={review.id}>
                {/* flex above class in column direction */}
                <div className="review-top">
                    <div className="review-left">
                        <img className="review-icon" src={window.profile_url} />
                    </div>

                    <div className="review-right">
                        {/* above class in column direction */}
                        <h3>{review.reviewer.firstname} {review.reviewer.lastname}</h3>
                        <div>
                            {/* above class in reg direction */}
                            <ReactStars
                                count={5}
                                size={20}
                                isHalf={true}
                                edit={false}
                                value={review.rating}
                                color="#e6e6e6"
                            />
                            <p>{review.activity_date}</p>
                        </div>
                    </div>
                </div>


                <div className="review-bottom">
                    <p>{review.review_text}</p>
                    {currentUser === review.user_id ? (
                        <div className="review-options">
                            <p className="option-text" onClick={() => deleteReview(review.id)}>Delete</p>
                            <p>|</p>
                            <p className="option-text" onClick={() => openModal({type: 'edit-review', review: review})}>Edit</p>
                        </div>
                    ) : null}
                </div>

            </div>
            ))}


        </>
    )  
}
 
export default ReviewIndex;