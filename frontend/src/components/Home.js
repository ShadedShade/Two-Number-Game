import React, { useEffect, useState } from 'react';
import Header from './Header.js'
import LoginTest from './LoginTest.js'
import Test from './TestButton.js'
import Signup from './Signup'
import Login from './Login.js'
import Navbar from './Navbar.js'
import Sidebar from './Sidebar.js'
import HomeNav from './HomeNav.js'



function Home() {
    return (
    <div>
            <div>
        <HomeNav />
            </div>
            <div>
        <Sidebar />
            </div>
    </div>);
}
export default Home;