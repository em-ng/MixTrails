import React from 'react';
import { Link } from 'react-router-dom';

const TrailIndexItem = ({trails}) => (
   
    <ul>
        {
          // park.trails.map(trail => 
          Object.values(trails).map(trail =>
            <Link to={`/trails/${trail.id}`} key={trail.id} className="trail-item">

                <div className="trail-item-photo">
                  <img src={trail.photoURL} className = 'trail-i-image'/> 
                </div>

                <div className="trail-i-content">
                  <h3>#{trail.id} - {trail.name}</h3>
                  <p>{trail.park.name}</p>

                  <div className="diff-rating">
                    <p className={`${trail.difficulty}`}>{trail.difficulty}</p>
                    <p className="rating">Review Stars</p>
                  </div>

                  <p>Length: {trail.length} mi</p>
                  <p>{trail.description}</p>
                </div>

            </Link>
          )
        }
    </ul>
    
)

export default TrailIndexItem;