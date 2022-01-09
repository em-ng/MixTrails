import React from 'react';
import TrailIndexItem from './trail_index_item';

const TrailIndex = ({park}) => {
    return(
        <div>
            <h2>Tops trails (4)</h2>
            <TrailIndexItem trails={park.trails}/>
        </div>
    )  
}

export default TrailIndex;

