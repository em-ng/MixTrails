import React from 'react';

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
    
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // ------- above creates the outer map without marker

        if (this.props.park) {
            mark = new google.maps.Marker({position: {lat: this.props.park.lat, lng: this.props.park.long}}),
            mark.setMap(this.map);
        } else {
            mark = new google.maps.Marker({position: {lat: this.props.trail.lat, lng: this.props.trail.long}}),
            mark.setMap(this.map);
        }
    }

    render() {
        debugger

        if (this.props.park) {
            mark = new google.maps.Marker({position: {lat: this.props.park.lat, lng: this.props.park.long}}).setMap(this.map);
        } else {
            mark = new google.maps.Marker({position: {lat: this.props.trail.lat, lng: this.props.trail.long}}).setMap(this.map);
        }

        return(
            <div className="map" ref="map">
    
            </div>
        )
    }
}

export default Map;