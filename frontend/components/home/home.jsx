import React from 'react';

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
                    <div className="search-bar">
                        <input className="search-box" type="text" placeholder="Search by city, park, or trail name" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;