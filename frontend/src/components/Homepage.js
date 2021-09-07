import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar.js'
import Navbar from './Navbar.js'
import HomepageContent from '.HomepageContent.js';
import '../styles/homepage.css'


function Homepage() {
    return (
        <div>
            <Navbar />
            
            <Sidebar />
            
                        
        </div>
        
    );
}

export default Homepage;