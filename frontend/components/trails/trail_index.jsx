import React from 'react';
import TrailIndexItem from './trail_index_item';

const TrailIndex = ({trails}) => {
    // debugger
    
    // if(!trails) return null;
    return(
        <div>
            <h2>Top trails (4)</h2>
            <TrailIndexItem trails={trails}/>
        </div>
    )  
}
 

export default TrailIndex;

