import React from 'react';
import { Link } from 'react-router-dom';

const TrailIndexItem = ({trails}) => (
   
    <ul>
        {
          // park.trails.map(trail => 
          Object.values(trails).map(trail =>
            <Link to={`/trails/${trail.id}`} key={trail.id} className="trail-item">

                <div className="trail-item-photo">
                  <img src={trail.photoURL} className = 'trail-image'/>
                  
                </div>

                <div className="trail-i-content">
                  <h2>#{trail.id} - {trail.name}</h2>
                  <p>{trail.park.name}</p>
                  <p>{trail.difficulty}</p>
                  <p>{trail.description}</p>
                </div>

            </Link>
          )
        }
    </ul>
    
)

export default TrailIndexItem;