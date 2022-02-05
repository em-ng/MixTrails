import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowCircleRight, faArrowRight } from "react-icons/fa";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: "",
            visibility: "hidden"
        }
    }

    componentDidMount() {
        this.props.fetchParks()
    }

    render() {
        return(
            <div className="search-bar">
                <div className="search-input">
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                    type="text"
                    placeholder="Search by park or trail name"
                    />
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                </div>



                <div className="search-results">

                </div>
            </div>
        )
    }
}

export default SearchBar;