import React from 'react';
import NearbyTrailIndex from './nearby_trail_index';
import ReactStars from 'react-rating-stars-component';
// import ReviewIndex from '../reviews/review_index';
import ReviewIndexContainer from '../reviews/review_index_container';
import SubNav from '../nav_bar/sub_nav';
import Map from '../maps/map';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faPrint, faShare } from "@fortawesome/free-solid-svg-icons";

class TrailShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTrail(this.props.match.params.trailId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.trailId !== prevProps.match.params.trailId) {
            this.props.fetchTrail(this.props.match.params.trailId)
        }
    }

    openModal(modal){
        if (this.props.currentUser) {
            this.props.openModal(modal)
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        const { trail, currentUser } = this.props;
        if (!trail) return null;
        if (!trail.reviews) return null;
        if (!trail.nearbyTrails) return null;
        
        let avgRating = 0;
        trail.reviews.forEach(review => {
            avgRating += review.rating
        })
        avgRating = (avgRating / (trail.reviews.length));

        return(
            <div className="trail-bg">
                <div className="trail-show">
                    {/* flex above class inner two-divs in column direction (trail top and trail bott) */}
                    <SubNav park={trail.park}/>

                    <div className="trail-top">
                        <img src={trail.photoURL} className ="trail-img"/>
                        <div className="trail-overlay">
                            <h2>{trail.name}</h2>
                            <div className="trail-diff">
                                <p className={`${trail.difficulty}`}>{trail.difficulty}</p>
                                {/* <p>Ratings</p> */}
                                <ReactStars
                                count={5}
                                size={20}
                                isHalf={true}
                                edit={false}
                                value={avgRating}
                                />
                            </div>
                            <p className="park-name">{trail.park.name}</p>
                        </div>
                    </div>

                    <div className="trail-mid">
                        <div className="button-icons">
                            <a target="_blank" href={`https://www.google.com/maps/dir/Current+Location/${trail.lat},${trail.long}`}>
                                <FontAwesomeIcon icon={faRoute} />
                                <p>Directions</p>
                            </a>
                        </div>

                        <div className="button-icons">
                            <a href="javascript:window.print();">
                                <FontAwesomeIcon icon={faPrint} />
                                <p>Print Map</p>
                            </a>
                        </div>

                        <div className="button-icons">
                            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=mixtrails.herokuapp.com">
                                <FontAwesomeIcon icon={faShare} />
                                <p>Share</p>
                            </a>
                        </div>
                    </div>

                    <div className="trail-bottom">
                        {/* flex above class inner two divs in row */}
                        <div className="vertical-left">
                            {/* flex above class to column dire */}
                            <div className="trail-sum">
                                <p>{trail.summary}</p>
                            </div>

                            <div className="trail-info">
                                {/* flex above class to row */}
                                <div className="trail-info1">
                                    <h3>Length</h3>
                                    <p>{trail.length} mi</p>
                                </div>

                                <div className="trail-info1">
                                    <h3>Elevation gain</h3>
                                    <p>{trail.elevation} ft</p>
                                </div>

                                <div className="trail-info1">
                                    <h3>Route type</h3>
                                    <p>{trail.route_type}</p>
                                </div>
                            </div>

                            <div className="trail-descr">
                                <h2>Description</h2>
                                <p>{trail.description}</p>
                            </div>

                            <div className="trail-review">
                                <h2>Reviews</h2>
                                <ReviewIndexContainer reviews={trail.reviews} currentUser={currentUser} />
                            </div>

                        </div>


                        <div className="vertical-right">

                            <div className="map-trail">
                                <Map trail={trail} />
                            </div>
                    
                            <NearbyTrailIndex trails={trail.nearbyTrails} />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default TrailShow;