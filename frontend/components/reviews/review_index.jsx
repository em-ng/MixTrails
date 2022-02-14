import React from 'react';
import ReactStars from 'react-rating-stars-component';
// import ReviewIndexItem from './review_index_item';

const ReviewIndex = ({reviews, currentUser}) => {

    return(
        <>
            {reviews.map((review) => (
            <div className="reviews-container">
                {/* flex above class in column direction */}
                <div className="review-top">
                    <div className="review-left">
                        <img className="profile-icon" src={window.profile_url} />
                    </div>

                    <div className="review-right">
                        {/* above class in column direction */}
                        <h3>{review.reviewer.firstname} {review.reviewer.lastname}</h3>
                        <div>
                            {/* above class in reg direction */}
                            <ReactStars
                                size={20}
                                isHalf={true}
                                edit={false}
                                value={review.rating}
                            />
                            <p>{review.activity_date}</p>
                        </div>
                    </div>
                </div>


                <div className="review-bottom">
                    <p>{review.review_text}</p>
                    {currentUser === review.user_id ? (
                        <div className="review-options">
                            <p onClick={() => this.props.deleteReview(review.id)}>Delete</p>
                            <p>|</p>
                            {/* <p onClick={() => this.props.openModal()}>Edit</p> */}
                        </div>
                    ) : null}
                </div>

            </div>
            ))}


        </>
    )  
}
 
export default ReviewIndex;