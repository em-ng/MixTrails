import React from 'react';
import { Link } from 'react-router-dom';

const TrailIndexItem = ({trails}) => (
   
    <ul>
        {
          trails.map(trail => 
            <Link to={`/trails/${trail.id}`} key={trail.id} className="trail-item">

                <div className="trail-item-photo">
                  {/* <Link to={`/trails/${trail.id}`}> */}
                        {/* <img src= {trail`${trail.id}`.photoURL} className = 'trail-image'/> */}
                        {/* <img src= {trail.photo} className = 'trail-image'/> */}
                  {/* </Link> */}
                </div>

                <div className="trail-i-content">
                    <h2>#{trail.id} - {trail.name}</h2>
                    <p>{trail.park}</p>
                    <p>{trail.difficulty}</p>
                    <p>{trail.description}</p>
                </div>

            </Link>
          )
        }
    </ul>
    
)

export default TrailIndexItem;