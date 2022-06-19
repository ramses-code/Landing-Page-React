import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar  navbar-expand-md navbar-dark bg-dark sticky-top">
            <a className="navbar-brand" href="#">React</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Service</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " href='#'>Contact</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar