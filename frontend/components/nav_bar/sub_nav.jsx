import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class SubNav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return(
            <div className="sub-nav">
                <div className="location">
                    <p>United States of America</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                    {this.props.park.id === 1 ? <p>New Hampshire</p> : <p>Maine</p>}
                    <FontAwesomeIcon icon={faChevronRight} />
                    <p><Link to={`/parks/${this.props.park.id}`}>{this.props.park.name}</Link></p>
                </div>

                <div className="sub-search">
                    <input className="tiny-search" type="text" placeholder='Enter a city, park or trail name' />
                </div>
            </div>

        )
    }
}

export default SubNav;