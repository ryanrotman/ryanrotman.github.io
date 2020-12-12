function Navbar() {
    return (
        <nav className="black" role="navigation">
            <div className="nav-wrapper container">
            <a href="/" id="logo-container" className="brand-logo">ryan<strong>rotman</strong></a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/about">About Me</a></li>
                <li><a href="/contact">Connect</a></li>
            </ul>

            <ul id="nav-mobile" className="right sidenav">
                <li className="white-text"><a href="#portfolio">Portfolio</a></li>
                <li className="white-text"><a href="#about-me-heading">About Me</a></li>
                <li className="white-text"><a href="#skills-connect-resume">Connect</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </nav>
    );
}

export default Navbar;