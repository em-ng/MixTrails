import React from 'react';
import SubNav from '../nav_bar/sub_nav';
import TrailIndex from '../trails/trail_index';

class ParkShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPark(this.props.match.params.parkId)
        this.props.fetchTrails(this.props.match.params.parkId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.parkId !== prevProps.match.params.parkId) {
            this.props.fetchPark(this.props.match.params.parkId)
            this.props.fetchTrails(this.props.match.params.parkId)
        }
    }

    render() {
        const { park, trails } = this.props;
        if (!park) return null;
        if(!trails) return null;
        const pictures = Object.values(trails).slice(0, 3)

        return(
            <div className="park-show">
                <SubNav park={park}/>

                {/* //missing photo slide */}
                <div className="park-photos">
                    {
                      pictures.map((trail) => {
                        if (park.id) {
                            return(
                            // <div className="park-pic">
                                <img src={trail.photoURL} className ="trail-image"/>)
                            // </div>)
                        }
                        // else if (park.id === 2 && idx > 4) {
                        //     return(
                        //     <div className="park-pic">
                        //         <img src={trail.photoURL} className ="trail-image"/>
                        //     </div>)
                        // }
                      })
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

                {/* <div className='map'>

                </div> */}
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

                <TrailIndex trails={trails}/>
            </div>

        
        )
    }
}

export default ParkShow;