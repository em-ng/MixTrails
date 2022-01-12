import React from 'react';
import NearbyTrailIndexItem from './nearby_trail_index_item';

const NearbyTrailIndex = ({trails}) => {
    return(
        <div className="nearby-index">
            <h2>Nearby trails</h2>
            <NearbyTrailIndexItem trails={trails}/>
        </div>
    )  
}

export default NearbyTrailIndex;