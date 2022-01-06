import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return(
        <footer>
            <div className="footer-box">
                <div className="footer-logo">
                    <Link to='/'>
                        <img src={window.logo_url}></img>
                        <span>MixTrails</span>
                    </Link>
                </div>

                <div className="footer-links">
                    <a href="https://github.com/em-ng"><i class="fab fa-github-alt"></i></a>
                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;