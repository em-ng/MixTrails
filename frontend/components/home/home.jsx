import React from 'react';

const Home = ({ currentUser }) => {
    const text = (currentUser ? (
        <div>
            <h1>Let's find a new trail, {`${currentUser.firstname}`}</h1>
        </div>
    ) : (
        <div>
            <h1>Find your next trail</h1>
        </div>
    ))
    return(
        <div className="homepage">
            <div className="background">
                <div className="content">
                    <h1>
                        {text}
                    </h1>
                    <div className="search-bar">
                        <input type="text" placeholder="Search by city, park, or trail name" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;