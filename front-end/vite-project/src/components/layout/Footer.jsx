import {NavLink} from 'react-router-dom';
import '../../styles/Footer.css';
import githubIcon from '../../assets/images/other-icons/github.svg';
import linkedInIcon from '../../assets/images/other-icons/LinkedIn.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-inner">
                    <hr className="h-line"></hr>
                    <div className="footer-links">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <p>|</p>
                        <NavLink to="/" className="nav-link">About</NavLink>
                        <p>|</p>
                        <NavLink to="/" className="nav-link">Projects</NavLink>
                        <p>|</p>
                        <NavLink to="/" className="nav-link">Contact</NavLink>  
                    </div>
                    <div className="icon-links">
                        <a href="https://github.com/ayii365" target="_blank"><img className="footer-icons" src={githubIcon} /></a>
                        <a href="https://www.linkedin.com/in/ayii-madut/" target="_blank"><img className="footer-icons" src={linkedInIcon} /></a>
                    </div>
                    <div className="rights-res">
                        <p>© 2025 Ayii. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;