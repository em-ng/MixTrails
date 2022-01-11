import React from 'react';
import TrailIndexItem from './trail_index_item';

const TrailIndex = ({park, trails}) => {
    // debugger
    
    // if(!trails) return null;
    return(
        <div className="trail-index-title">
            <h2>Top trails (4)</h2>
            <TrailIndexItem park={park} trails={trails}/>
        </div>
    )  
}
 

export default TrailIndex;

