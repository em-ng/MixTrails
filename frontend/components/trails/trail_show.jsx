import React from 'react';
import NearbyTrailIndex from './nearby_trail_index';

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

    render() {
        const { trail } = this.props;
        if (!trail) return null;
        return(
            <div className="trail-show">
                {/* flex above class inner two-divs in column direction (trail top and trail bott) */}
                <div className="trail-top">

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
                        </div>

                    </div>




                    <div className="vertical-right">
                        <div className="trail-map">

                        </div>

                        <NearbyTrailIndex trails={trail.nearbyTrails} />
                    </div>

                </div>

            </div>
        )
    }
}

export default TrailShow;