import React, { useEffect, useState } from 'react';
import '../styles/homenav-style.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function HomeNav() {
    return (
        <nav role="navigation">
            <div class="logo">
                <a className="navbar-brand px-2" href="#" id="brand">
                    Logo <span style={{color: "#f36e23"}}>Here</span>
                </a>
            </div>
            <ul>
                <li><a href="#" aria-haspopup="true" id="profile"><AccountCircleIcon style={{color: "white"}} /></a>
                    <ul class="dropdown" aria-label="submenu">
                        <li style={{right: "65%"}}><a href="#">View Profile</a></li>
                        <li style={{right: "65%"}}><a href="#">Settings</a></li>
                        <li style={{right: "65%"}}><a href="#">Link Here</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
export default HomeNav;