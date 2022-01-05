import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const buttons = (currentUser ? (
        <div className="logout-button">
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div className="nav-buttons">
            <Link to='/signup' className="sign-in">Sign Up</Link>
            <Link to='/login' className="login">Log In</Link>
        </div>
    ))

    return(
        <nav className="nav-bar">
              
            <div className="dropdown">
                <div className="title">
                    <span className="explore-text">Explore</span>
                </div>

                <div className="title" >
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

                <div className="title">
                    <span className="shop-text">Shop</span>
                </div>

            </div>

            <div>
                <Link to='/' className="nav-logo">
                    <img className='logo-icon' src={window.logo_url}></img>
                    <span className='logo-text'>MixTrails</span>
                </Link>
            </div>

            {buttons}
            
        </nav>
    )
}

export default NavBar;

