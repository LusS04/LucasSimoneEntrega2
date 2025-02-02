import React from 'react';

function Nav () {
    return (
        <nav className="navbar navbar-expand-lg nav-footer-bg px-5">
            <a className="navbar-brand" href="/">E-comerce</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/Login">Ingresar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/SingUp">Registrarse</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
