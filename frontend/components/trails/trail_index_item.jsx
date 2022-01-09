import React from 'react';

const TrailIndexItem = ({trails}) => (
   
    <ul>
        {
          trails.map(trail => 
            <div className="trail-item">
                <div className="trail-item-photo">

                </div>

                <div className="trail-i-content">
                    <h2>#{trail.id} - {trail.name}</h2>
                    <p>{trail.park}</p>
                    <p>{trail.difficulty}</p>
                    <p>{trail.description}</p>
                </div>
            </div>
          )
        }
    </ul>
    
)

export default TrailIndexItem;