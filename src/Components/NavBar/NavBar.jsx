import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css";

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-bg-body-tertiary navbar-custom fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-brand d-flex align-items-center col-lg-3 me-0">
                            <img
                                alt="templogo"
                                src="/templogo.png"
                                width="30"
                                height="30"
                            />&nbsp;
                            <Link className="navbar-brand" to="/">
                                PetApp
                            </Link>
                        </div>
                        <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dogs">Dog Breeds</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/dogs/quiz">Breed Selector</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dogs/breeders">Breeders</Link>
                            </li>


                        </ul>
                        <div className="nav d-lg-flex col-lg-3 justify-content-lg-end">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admin
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link" to="/dogs/new">Add a dog</Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link className="nav-link" to="/dogs/newbreeder">Add a Breeder</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link" to="/map">Google Maps</Link>
                                    </li>
                                </ul>
                            </li>
                            <li >
                                <Link className="btn btn-light auth" to="/dogs/auth">Sign In</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
