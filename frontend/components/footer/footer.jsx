import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

const Footer = () => {
    return(
        <footer>
            <div className="footer-box">
                <div>
                    <Link className="footer-logo" to='/'>
                        <img className="footer-icon" src={window.logo_url}></img>
                        <span className="footer-text">MixTrails</span>
                    </Link>
                </div>

                <div className="footer-links">
                    <a className="icon" href="https://github.com/em-ng"><FontAwesomeIcon icon={["fab", "github-alt"]} /></a>
                    <a className="icon" href="https://www.linkedin.com/in/emily-n-8a9822204/"><FontAwesomeIcon icon={["fab", "linkedin-in"]} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;