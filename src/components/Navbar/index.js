import { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

function Navbar() {

    useEffect(() => {
        let sidenav = document.querySelector('#nav-mobile');
        M.Sidenav.init(sidenav, {});
    }, []);

    return (
        <nav className="black" role="navigation">
            <div className="nav-wrapper container">
            <Link to="/" id="logo-container" className="brand-logo">ryan<strong>rotman</strong></Link>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <ul id="nav-mobile" className="right sidenav">
                <li className="white-text"><Link to="/">Home</Link></li>
                <li className="white-text"><Link to="/portfolio">Portfolio</Link></li>
                <li className="white-text"><Link to="/about">About Me</Link></li>
                <li className="white-text"><Link to="/contact">Contact</Link></li>
            </ul>
            {/* eslint-disable-next-line */}
            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </nav>
    );
}

export default Navbar;