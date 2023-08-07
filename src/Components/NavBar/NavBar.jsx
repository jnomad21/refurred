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
                        <div className="navbar-brand col-lg-3 me-0">
                            <Link className="navbar-brand" to="/">
                                PetApp
                            </Link>
                        </div>
                        <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/map">Google Maps</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dogs">Dog Breeds</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dogs/new">Add a dog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dogs/quiz">Breed Selector</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link" to="/map">Google Maps</Link>
                            </li>
                        </ul>
                        <div class="d-lg-flex col-lg-3 justify-content-lg-end">
                            <Link className="btn btn-light auth" to="/dogs/auth">Sign In</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}