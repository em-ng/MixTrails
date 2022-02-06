import React from 'react';
import SearchBarContainer from '../search/search_bar_container';

const Home = ({ currentUser }) => {
    const text = (currentUser ? (
        <div className="header">
            <h1>Let's find a new trail, {`${currentUser.firstname}`}</h1>
        </div>
    ) : (
        <div className="header">
            <h1>Find your next trail</h1>
        </div>
    ))
    return(
        <div className="homepage">
            <div className="home-background">
                <div className="home-content">
                    {text}
                    {/* <div className="search-bar"> */}
                        {/* <input className="search-box" type="text" placeholder="Search by city, park, or trail name" /> */}
                    <SearchBarContainer />
                    {/* </div> */}
                </div>
            </div>

            <div className="home-text">
                <div className="hometext-1">
                    <h1>200k+</h1>
                    <h3>curated trails</h3>
                    <p>Discover unexpected gems, even in your own backyard.</p>

                </div>

                <div className="hometext-1">
                    <h1>25 mil</h1>
                    <h3>fellow explorers</h3>
                    <p>Share your adventures and learn from our global community.</p>
                </div>

                <div className="hometext-1">
                    <h1>214 mil</h1>
                    <h3>logged miles</h3>
                    <p>Navigate your way and keep a record of all your travels.</p>
                </div>
            </div>

            <div className="home-background-2">
            </div>
        </div>
    )
}

export default Home;