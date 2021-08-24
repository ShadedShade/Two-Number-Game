import React from 'react';
import { Link } from 'react-router-dom';


// Creates a Navigation Bar
function Nav() {
    return (
        <nav class="navbar navbar-light navbar-expand bg-light navigation-clean">
            <div class="container">
                <p class="navbar-brand" href="#">Brand</p>
                <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"></button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-nav ml-auto">
                    
                    <Link to='/' className="nav-item nav-link active">Home</Link>
                    <Link to='/tweets' className="nav-item nav-link">Tweets</Link>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;