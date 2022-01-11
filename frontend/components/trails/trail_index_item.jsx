import React from 'react';
import { Link } from 'react-router-dom';

const TrailIndexItem = ({park, trails}) => {
  let parkReal;
  // const parkId1 = Object.values(trails).slice(0, 4);
  // const parkId2 = Object.values(trails).slice(4, 8);



  let parkId1 = [];
  let parkId2 = [];

  for (let k in trails) {
    if (trails[k].park.id === 1) {
      parkId1.push(trails[k])
    } else {
      (parkId2.push(trails[k]))
    }
  }

  if (park.id === 1) {
    parkReal = parkId1;
  } else {
    parkReal = parkId2;
  }

   return(
    <ul>
        {
          Object.values(parkReal).map(trail =>
            <Link to={`/trails/${trail.id}`} key={trail.id} className="trail-item">

                <div className="trail-item-photo">
                  <img src={trail.photoURL} className = 'trail-i-image'/> 
                </div>

                <div className="trail-i-content">
                  <h3>#{trail.id} - {trail.name}</h3>
                  <p className="trail-park">{trail.park.name}</p>

                  <div className="diff-rating">
                    <p className={`${trail.difficulty}`}>{trail.difficulty}</p>
                    {/* <p className="rating">stars</p> */}
                  </div>

                  <p className="trail-length">Length: {trail.length} mi</p>
                  <p className="desc">{trail.description}</p>
                </div>

            </Link>
          )
        }
    </ul>)
    
}

export default TrailIndexItem;