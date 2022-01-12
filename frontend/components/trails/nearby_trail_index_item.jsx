import React from 'react';
import { Link } from 'react-router-dom';

const NearbyTrailIndexItem = ({trails}) => {
  // debugger
  return (
   
    <ul>
        {
          trails.map(trail => 
            <Link to={`/trails/${trail.id}`} key={trail.id} className="nb-item">

                <div className="nearby-box">
                  <img src={trail.photoURL} className = "nb-image"/> 
                
                  <div className="nb-content">
                      <h3>{trail.name}</h3>
                      <p>{trail.park.name}</p>
                      <div className="diff-rating">
                        <p className={`${trail.difficulty}`}>{trail.difficulty}</p>
                        <p>Rating</p>
                      </div>
                      <p>Length: {trail.length} mi</p>
                  </div>
                </div>

            </Link>
          )
        }
    </ul>
  )
}

export default NearbyTrailIndexItem;