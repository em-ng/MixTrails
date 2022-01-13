import React from 'react';
// import ReactDOM from 'react-dom';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let center;
        if (this.props.park) {
            debugger
            center = { lat: this.props.park.lat, lng: this.props.park.long };
            debugger
        } else {
            center = { lat: this.props.trail.lat, lng: this.props.trail.long };
        }

        // const mapNode = ReactDOM.findDOMNode(this.map);  //this.refs.map deprecated?

        const mapOptions = {
          center: center,
          zoom: 13
        };
    
        // wrap this.mapNode in a Google Map
        debugger
        this.map = new google.maps.Map(this.mapNode, mapOptions); //this.mapNode commented out and still works, why...
        // ------- above creates the outer map without marker

        // const pos1 = new google.maps.LatLng(this.props.trail.lat, this.props.trail.long);
        // debugger
        // const pos2 = new google.maps.LatLng(this.props.park.lat, this.props.park.long);

        let marker; //takes in a position and map key

        if (this.props.trail) {
            // let pos;
            const pos1 = new google.maps.LatLng(this.props.trail.lat, this.props.trail.long);
            marker = new google.maps.Marker({
                position: pos1,
                map: this.map
            });
        } else {
            debugger
            const pos2 = new google.maps.LatLng(this.props.park.lat, this.props.park.long);
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