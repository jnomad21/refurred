import { Link } from 'react-router-dom';
import { useState } from 'react';
// import * as userService from '../../utilities/users-service';
import "./NavBar.css";


export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleLinkClick = () => {
        setIsNavOpen(false);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-bg-body-tertiary navbar-custom fixed-top">
                <div className="container-fluid">
                <div className="navbar-brand col-lg-3 me-0">
                        <img
                            alt="templogo"
                            src="/templogo.png"
                            width="30"
                            height="30"
                        />&nbsp;
                        <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
                            re<span className="furr">furr</span>ed
                        </Link>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded={isNavOpen}
                        aria-label="Toggle navigation"
                        onClick={toggleNav}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse d-lg-flex${isNavOpen ? ' show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav col-lg-8 justify-content-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dogs" onClick={handleLinkClick}>Dog Breeds</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/dogs/quiz" onClick={handleLinkClick}>Breed Selector</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dogs/breeders" onClick={handleLinkClick}>Breeders</Link>
                            </li>
                        </ul>
                        <div>
                        <div className="nav d-lg-flex col-lg-3 justify-content-lg-end">

                        {/* <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admin
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link" to="/dogs/new">Add a dog</Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link className="nav-link" to="/dogs/newbreeder" onClick={handleLinkClick}>Add a Breeder</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link" to="/map" onClick={handleLinkClick}>Google Maps</Link>
                                    </li>

                                </ul>

                            </li>

                            </ul> */}
                            
                            {/* <li >
                                <Link className="btn btn-light auth" to="/dogs/auth">Sign In</Link>
                            </li> */}
                    </div>
                    </div>
                    </div>

</div>
            </nav>
        </>
    );
}
