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

        return(
            <div className="park-show">
                <SubNav park={park}/>


                <div className="park-photos">
                    {
                      Object.values(trails).map((trail, idx) => {
                        if (park.id === 1 && idx < 3) {
                            return(
                            <div className="park-pic">
                                <img src={trail.photoURL} className = 'trail-image'/>
                            </div>)
                        } else if (park.id === 2 && idx > 4) {
                            return(
                            <div className="park-pic">
                                <img src={trail.photoURL} className = 'trail-image'/>
                            </div>)
                        }
                      })
                    }
                </div>

                <div className='tiny-header'>
                    {park.id === 1 ? <p>#1 of 60 state parks in New Hampshire</p> : <p>#10 of 60 national parks in United States of America</p>}
                </div>

                <div className='park-header'>
                    <h2>Best trails in {park.name}</h2>
                </div>

                <div className='park-summ'>
                    <p>{park.summary}</p>
                </div>

                {/* <div className='map'>

                </div> */}

                <div className="park-info">
                    <div>
                        <p className="park-title">Acreage:</p>
                        <p className="park-text">{park.acreage} acres</p>

                    </div>
                    <div>
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