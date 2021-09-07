import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar.js'
import Navbar from './Navbar.js'
import '../styles/homepage.css'


function Homepage() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Sidebar />
            </div>
            {/* Contents here? */}
        </div>
        
    );
}

export default Homepage;