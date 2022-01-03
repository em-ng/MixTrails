import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const buttons = (currentUser ? (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            <Link to='/signup' className="sign-in">Sign Up</Link>
            <Link to='/login' className="login">Log In</Link>
        </div>
    ))

    return(
        <nav className="nav-bar">
            <div className="nav-links">
                <div className="explore">
                    <Link to='/'>Explore</Link>
                </div>
                <div className="saved">
                    <Link to="/">Saved
                        <ul>
                            <li>My favorites</li>
                            <li>My maps</li>
                            <li>Lists</li>
                            <li>Activities</li>
                            <li>Completed</li>
                            <li>Create Map</li>
                        </ul>
                    </Link>
                </div>
                <div className="shop">
                    <Link to="/">Shop
                        <ul>
                            <li>MixTrails Gear</li>
                            <li>Give Pro</li>
                        </ul>
                    </Link>
                </div>

            </div>
            <div className="nav-logo">
                <Link to='/'>MixTrails</Link>
            </div>

            <div className="nav-buttons">
                {buttons}
            </div>
        </nav>
    )
}

export default NavBar;