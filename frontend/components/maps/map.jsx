import React from 'react';
import { withRouter } from 'react-router-dom';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let center;
        if (this.props.park) {
            center = { lat: this.props.park.lat, lng: this.props.park.long };
        } else {
            center = { lat: this.props.trail.lat, lng: this.props.trail.long };
        }

        const mapOptions = {
          center: center,
          zoom: 8
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);

        let marker;
        let pos;

        if (this.props.trail) {
            pos = new google.maps.LatLng(this.props.trail.lat, this.props.trail.long);
            marker = new google.maps.Marker({
                position: pos,
                map: this.map
            });
        } else {
            this.props.park.trails.forEach(trail => {
                pos = new google.maps.LatLng(trail.lat, trail.long);
                marker = new google.maps.Marker({
                    position: pos,
                    map: this.map
                });
            })
        }
    }

   
    // componentDidUpdate(prevProps) {
    //     // debugger
    //     if (this.props.match.params.parkId !== prevProps.match.params.parkId) {
    //         this.props.fetchPark(this.props.match.params.parkId)
    //         this.props.fetchTrails(this.props.match.params.parkId)
    //     }
    // }
    

    render() {
        return(
            <div className="map" ref={ map => this.mapNode = map } />
        )
    }
}

export default withRouter(Map);