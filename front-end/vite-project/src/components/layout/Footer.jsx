import {NavLink} from 'react-router-dom';
import '../../styles/Footer.css';
import githubIcon from '../../assets/images/other-icons/github.svg';
import linkedInIcon from '../../assets/images/other-icons/LinkedIn.svg';

function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    return (
        <div className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-links">
                        <NavLink to="/" className="nav-link" onClick={scrollToTop}>Home</NavLink>
                        <p>|</p>
                        <NavLink to="/about" className="nav-link" onClick={scrollToTop}>About</NavLink>
                        <p>|</p>
                        <NavLink to="/projects" className="nav-link" onClick={scrollToTop}>Projects</NavLink>
                        <p>|</p>
                        <NavLink to="/contact" className="nav-link" onClick={scrollToTop}>Contact</NavLink>  
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