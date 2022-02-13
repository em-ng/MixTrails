import React from 'react';
import ReviewIndexItem from './review_index_item';

const ReviewIndex = ({reviews}) => {
    // if(!trails) return null;
    return(
        <div className="reviews">
            <ReviewIndexItem reviews={reviews}/>
        </div>
    )  
}
 
export default ReviewIndex;