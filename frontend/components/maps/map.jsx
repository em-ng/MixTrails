import React from 'react';
// import ReactDOM from 'react-dom';

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

        // const mapNode = ReactDOM.findDOMNode(this.map);  //this.refs.map deprecated?

        const mapOptions = {
          center: center,
          zoom: 8
        };
    
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions); //this.mapNode commented out and still works, why...
        // ------- above creates the outer map without marker

        const pos1 = new google.maps.LatLng(this.props.trail.lat, this.props.trail.long);
        const pos2 = new google.maps.LatLng(this.props.park.lat, this.props.park.long);

        let marker;

        if (this.props.trail) {
            marker = new google.maps.Marker({
                position: pos1,
                map: this.map
            });
        } else {
            marker = new google.maps.Marker({
                position: pos2,
                map: this.map
            });
        }

        // if (this.props.park) {
        //     marker = new google.maps.Marker({position: {lat: this.props.park.lat, lng: this.props.park.long}}),
        //     marker.setMap(this.map);
        // } else {
        //     marker = new google.maps.Marker({position: {lat: this.props.trail.lat, lng: this.props.trail.long}}),
        //     marker.setMap(this.map);
        // }
    }

    render() {
        debugger
        
        return(
            <div className="map" ref={ map => this.mapNode = map }>
    
            </div>
        )
    }
}

export default Map;