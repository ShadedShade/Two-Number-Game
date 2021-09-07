import React, { useEffect, useState } from 'react';
import Header from './Header.js'
import LoginTest from './LoginTest.js'
import Test from './TestButton.js'
import Signup from './Signup'
import Login from './Login.js';
import Navbar from './Navbar';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import '../styles/landingpage-style.css';

function Landing() {    
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Blog/>
            <Contact/>
            <Footer/>
        </div>
);
}
export default Landing;