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
              
            <div className="dropdown">
                <span className="save-text">Saved</span>
                <div className="dropdown-content">
                    <Link to="/signup">My favorites</Link>
                    <Link to="/signup">My maps</Link>
                    <Link to="/signup">Lists</Link>
                    <Link to="/signup">Activities</Link>
                    <Link to="/signup">Completed</Link>
                    <Link to="/signup">Create map</Link>
                </div>
            </div>

                {/* <div className="shop">
                    <Link to="/">Shop
                        <ul>
                            <li>MixTrails Gear</li>
                            <li>Give Pro</li>
                        </ul>
                    </Link>
                </div> */}
                {/* <div className="explore">
                    <Link to='/'>Explore</Link>
                </div> */}

            <div>
                <Link to='/' className="nav-logo">
                    <img className='logo-icon' src={window.logo_url}></img>
                    <span className='logo-text'>MixTrails</span>
                </Link>
            </div>

            <div className="nav-buttons">
                {buttons}
            </div>
        </nav>
    )
}

export default NavBar;

