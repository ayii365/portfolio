import { Link, NavLink } from 'react-router-dom';
import '../../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-inner">

                    <div className="nav-left">
                        <Link to="/" className="nav-logo">PORTFOLIO</Link>  
                    </div>

                    <div className="nav-right">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/projects" className="nav-link">Projects</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;