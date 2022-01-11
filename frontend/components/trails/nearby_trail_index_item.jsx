import React from 'react';
import { Link } from 'react-router-dom';

const NearbyTrailIndexItem = ({trails}) => {
  debugger
  return (
   
    <ul>
        {
          trails.map(trail => 
            <Link to={`/trails/${trail.id}`} key={trail.id} className="trail-item">

                <div className="nearby-item-photo">
                  <img src={trail.photoURL} className = 'trail-i-image'/> 
                
                </div>

                <div className="nearby-i-content">
                    <h3>{trail.name}</h3>
                    <p>{trail.park.name}</p>
                    <p>{trail.difficulty}</p>
                    <p>Length: {trail.length} mi</p>
                </div>

            </Link>
          )
        }
    </ul>
  )
}

export default NearbyTrailIndexItem;