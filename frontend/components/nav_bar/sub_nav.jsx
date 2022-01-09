import React from 'react';
import { Link } from 'react-router-dom';

class SubNav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return(
            <div className="sub-nav">
                <div className="location">
                    <p>United States of America ></p>
                    {this.props.park.id === 1 ? <p>New Hampshire ></p> : <p>Maine ></p>}
                    <p><Link to={`/parks/${this.props.park.id}`}>{this.props.park.name}</Link></p>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder='Enter a city, park or trail name' />
                </div>
            </div>

        )
    }
}

export default SubNav;