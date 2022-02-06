import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowCircleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: "",
            visibility: "hidden"
        }

        this.update = this.update.bind(this);
        this.handleHidden = this.handleHidden.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchParks()
    }

    // handleFilter(e) {
    //     const searchTerm = e.target.value;
    //     const newFilter = Object.value(this.props.parks).filter.map
    // }

    update(e) {
        this.setState({search: e.target.value})
    }

    handleHidden() {
        this.setState({visibility: this.state.visibility === "hidden" ? "show" : "hidden"})
    }


    render() {
        // debugger
        const { parks } = this.props;
        if (!parks) return null;
        const parksArr = Object.values(parks);
        const trailsArr = [];

        parksArr.forEach(park => {
            park.trails.forEach(trail => {
                trailsArr.push(trail)
            })
        })

        return(
            <div className="search-bar">
                <div className="search-input">
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                    // className="search-box"
                    type="text"
                    placeholder="Search by park or trail name"
                    onChange={this.update}
                    onFocus={this.handleHidden}
                    onBlur={this.handleHidden}
                    />
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                </div>  


                <div className={this.state.visibility === "hidden" ? "search-results hidden" : "search-results" }>
                    {/* {(this.state.search !== "") ? ( */}

                        {parksArr.map((park, idx) => {
                            if (park.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                                return(
                                    <li key={idx}>
                                        <Link to={`/parks/${park.id}`}>{park.name}
                                            <p className="subtext">{park.id === 1 ? "New Hampshire, " : "Maine, "}United States of America</p>
                                        </Link>
                                    </li>
                                )
                            }
                        })}
                        
                        {trailsArr.map((trail, idx) => {
                            if (trail.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                                return(
                                    <li key={idx}>
                                        <Link to={`/trails/${trail.id}`}>{trail.name}
                                            <p className="subtext">{trail.park_id === 1 ? "Franconia Notch State Park, New Hampshire, " : "Acadia National Park, Maine, "}United States of America</p>
                                        </Link>
                                    </li>
                                )
                            }
                        })

                    // ) : null
                    }
                    
                </div>
            </div>
        )
    }
}

export default SearchBar;