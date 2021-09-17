import React, { useEffect, useState } from 'react';
import '../styles/homenav-style.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function HomeNav() {
    return (
    <div>
        <nav role="navigation">
            <div class="logo">
                <a className="navbar-brand px-2" href="#" id="brand">
                    Logo <span style={{color: "#f36e23"}}>Here</span>
                </a>
            </div>
            <ul className="navProfile">
                <li><a href="#" aria-haspopup="true" id="profile"><AccountCircleIcon style={{color: "white"}} /></a>
                    <ul class="dropdown" aria-label="submenu">
                        <li style={{right: "65%"}}><a href="#" data-bs-toggle="modal" data-bs-target="#viewProfileModal">View Profile</a></li>
                        <li style={{right: "65%"}}><a href="#">Settings</a></li>
                        <li style={{right: "65%"}}><a href="#">Link Here</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        {/* VIEW PROFILE MODAL HERE */}
        <div class="modal fade" id="viewProfileModal" tabindex="-1" aria-labelledby="" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header mechanicsmodalheader">
                    <h5 class="modal-title" id="betModalLabel">View <span style={{ color: "#f36e23" }}>Profile</span></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-5">
                        <div className="col-md-12 py-5">
                            <div className="w-100 p-5 shadow">
                                <div className="col-md-12 d-flex py-3 px-5">
                                    <div className="col-md-6">
                                        <div className="form-group pb-4">
                                            <label style={{fontWeight: 600}} for="fullName" class="form-label">Full Name</label>
                                            <input id="fullName" style={{background: "none", border:"none"}} class="form-control" type="text" value="Juan Dela Cruz" aria-label="FirstName LastName" disabled readonly/>
                                        </div>
                                        <div className="form-group">
                                            <label style={{fontWeight: 600}} for="MPIN" class="form-label">MPIN</label>
                                            <input id="MPIN" style={{background: "none", border:"none"}} class="form-control" type="password" value="123456" aria-label="MPIN" disabled readonly/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group pb-4">
                                            <label style={{fontWeight: 600}} for="userID" class="form-label">User ID / Mobile Number</label>
                                            <input id="userID" style={{background: "none", border:"none"}} class="form-control" type="text" value="09217876549" aria-label="MobileNum" disabled readonly/>
                                        </div>
                                        <div className="form-group">
                                            <label style={{fontWeight: 600}} for="email" class="form-label">Email Address</label>
                                            <input id="email" style={{background: "none", border:"none"}} class="form-control" type="text" value="thisismyemail@gmail.com" aria-label="Email" disabled readonly/>
                                        </div>
                                    </div>                              
                                </div> 
                                <div className="col-md-12">
                                    <hr></hr>
                                </div>
                                <div className="col-md-12">
                                    <p style={{fontWeight:"500", fontSize:"15px", color:"#9ba0a6" }}>For more information and to change your UserID or your MPIN, contact our <a className="CCC" type="button"><span style={{ color: "#f36e23" }}>Customer Support.</span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ========================= */}
    </div>
    );
}
export default HomeNav;