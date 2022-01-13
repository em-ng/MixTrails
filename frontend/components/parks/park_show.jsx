import React from 'react';
import SubNav from '../nav_bar/sub_nav';
import TrailIndex from '../trails/trail_index';
import Map from '../maps/map';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faPrint, faShare } from "@fortawesome/free-solid-svg-icons";

class ParkShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchPark(this.props.match.params.parkId)
        this.props.fetchTrails(this.props.match.params.parkId)
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (this.props.match.params.parkId !== prevProps.match.params.parkId) {
            this.props.fetchPark(this.props.match.params.parkId)
            this.props.fetchTrails(this.props.match.params.parkId)
        }
    }

    render() {
        const { park, trails } = this.props;
        if (!park) return null;
        if(!trails) return null;
        const pictures = Object.values(trails).slice(0, 3);

        return(
            <div className="park-show">
                <SubNav park={park}/>

                <div className="park-photos">
                    {
                      pictures.map((trail) => {
                        if (park.id) {
                          return(
                            <img key={trail.id} src={trail.photoURL} className ="trail-image"/>)
                          }
                        }
                      )
                    }
                </div>

                <div className='tiny-header'>
                    {park.id === 1 ? <p>#1 of 60 state parks in New Hampshire</p> : <p>#10 of 60 national parks in United States of America</p>}
                </div>

                <div className='park-header'>
                    <h2>Best trails in {park.name}</h2>
                </div>

                <div>
                    <p className="park-summ">{park.summary}</p>
                    <p className="park-label">Description</p>
                    <p className="park-blurb">{park.description}</p>
                </div>

                <div className="map-park" >
                    <Map park={park} />
                </div>

                <div className="park-icons">
                    <div className="park-buttons">
                        <a target="_blank" href={`https://www.google.com/maps/dir/Current+Location/${park.lat},${park.long}`}>
                            <FontAwesomeIcon icon={faRoute} />
                            <p>Directions</p>
                        </a>
                    </div>

                    <div className="park-buttons">
                        <a href="javascript:window.print();">
                            <FontAwesomeIcon icon={faPrint} />
                            <p>Print Map</p>
                        </a>
                    </div>

                    <div className="park-buttons">
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=mixtrails.herokuapp.com">
                            <FontAwesomeIcon icon={faShare} />
                            <p>Share</p>
                        </a>
                    </div>
                </div>

                <div className="park-info">
                    <h3>Park information</h3>
                </div>

                <div className="info">
                    <div className="info-header">
                        <p className="park-title">Acreage:</p>
                        <p className="park-text">{park.acreage} acres</p>

                    </div>
                    <div className="info-header">
                        <p className="park-title">Contact:</p>
                        <p className="park-text">{park.contact}</p>
                    </div>
                </div>

                <TrailIndex park={park} trails={trails}/>
            </div>
        )
    }
}

export default ParkShow;