import React, { useEffect, useState } from 'react';
import '../styles/landingpage-style.css';
function Header() {
    return (
        <div className="hero vh-100 d-flex align-items-center" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1 className="text-white f">Play the <span style={{color: "#f36e23"}}>Lottery</span> Online</h1>
                        <h1 className="text-white s">Anytime, Anywhere.</h1>
                        <p className="text-white my-3">This is your chance to become a<br/> Lottery Millionare. Register Now!</p>
                        <a href="signup.html" className="btn me-2 btn-danger signup">SIGN UP</a>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
}

export default  Header;