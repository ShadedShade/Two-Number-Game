import React, { useEffect, useState } from 'react';



function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Logo <span style={{color: "#f36e23"}}>Here</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutus">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <a href="login.html" className="shadow btn btn-primary ms-lg-3 login">LOGIN</a>
                    {/* <!-- <button className="shadow btn btn-primary ms-lg-3 login">LOGIN</button> --> */}
                </div>
            </div>
        </nav>
    );
}
export default Navbar;