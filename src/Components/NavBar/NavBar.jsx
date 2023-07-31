import { Link } from 'react-router-dom';
import "./NavBar.css";


export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-bg-body-tertiary navbar-custom">
                <div className="container-fluid">
                    <div className="navbar-brand">Pet App</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dogs">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dogs/new">Add a dog</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 3</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}