import { Link, NavLink } from 'react-router-dom';
import '../../styles/Navbar.css';

function Navbar() {
    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-inner">

                    <div className="nav-left">
                        <Link to="/" className="nav-logo" onClick={scrollToTop}>AYII MADUT</Link>  
                    </div>

                    <div className="nav-right">
                        <NavLink to="/" className="nav-link" onClick={scrollToTop}>Home</NavLink>
                        <NavLink to="/about" className="nav-link" onClick={scrollToTop}>About</NavLink>
                        <NavLink to="/projects" className="nav-link" onClick={scrollToTop}>Projects</NavLink>
                        <NavLink to="/contact" className="nav-link" onClick={scrollToTop}>Contact</NavLink>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;