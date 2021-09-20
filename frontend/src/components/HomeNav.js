import React, { useEffect, useState } from 'react';
import '../styles/homenav-style.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router-dom";


let sessionName = sessionStorage.getItem("sessionName");
let sessionuser = sessionStorage.getItem("Userid");
let sessionmpin = sessionStorage.getItem("mPin");
let sessionmail = sessionStorage.getItem("sessionEmail");



function HomeNav() {

    const [profile, onProfileShow] = useState([]);

    const generateProfileUI = () =>
    {
        // generate profile UI
    }



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
                        <li style={{right: "65%"}}><a href="#" data-bs-toggle="modal" data-bs-target="#transferCreditModal">Transfer Credit</a></li>
                        <li style={{right: "65%"}}><a href="#">Logout</a></li>
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
                                            <input id="fullName" style={{background: "none", border:"none"}} class="form-control" type="text" value={sessionName} aria-label="FirstName LastName" disabled readonly/>
                                        </div>
                                        <div className="form-group">
                                            <label style={{fontWeight: 600}} for="MPIN" class="form-label">MPIN</label>
                                            <input id="MPIN" style={{background: "none", border:"none"}} class="form-control" type="password" value={sessionmpin} aria-label="MPIN" disabled readonly/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group pb-4">
                                            <label style={{fontWeight: 600}} for="userID" class="form-label">User ID / Mobile Number</label>
                                            <input id="userID" style={{background: "none", border:"none"}} class="form-control" type="text" value={sessionuser} aria-label="MobileNum" disabled readonly/>
                                        </div>
                                        <div className="form-group">
                                            <label style={{fontWeight: 600}} for="email" class="form-label">Email Address</label>
                                            <input id="email" style={{background: "none", border:"none"}} class="form-control" type="text" value={sessionmail} aria-label="Email" disabled readonly/>
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

        {/* TRANSFER CREDIT MODAL HERE */}
        <div class="modal fade" id="transferCreditModal" tabindex="-1" aria-labelledby="" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header mechanicsmodalheader">
                    <h5 class="modal-title" id="betModalLabel">Transfer <span style={{ color: "#f36e23" }}>Credit</span></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-5">
                        <form className="pt-5">
                            <div className="form-content">
                                <div className="row pb-4">
                                    <div className="col-md-6 py-5 px-3">
                                        <div className="form-group pb-4">
                                            <label style={{fontWeight: 600}} for="recUID" class="form-label">Recipient's User ID</label>
                                            <input id="recUID" class="form-control" type="tel" aria-label="Recipient's UserID" minlength="11" maxlength="11" placeholder="09XXXXXXXXX" pattern="[0-9]{2}[0-9]{9}"/>
                                        </div>
                                        <div className="form-group">
                                            <label style={{fontWeight: 600}} for="amount" class="form-label">Amount</label>
                                            <input id="amount" class="form-control" type="number" aria-label="amount"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 py-5 px-3">
                                        <div className="form-group pb-4">
                                        <label style={{fontWeight: 600}} for="gcashNum" class="form-label">Gcash Number</label>
                                            <input id="gcashNum" class="form-control" type="tel" aria-label="Gcash Number" minlength="11" maxlength="11" placeholder="09XXXXXXXXX" pattern="[0-9]{2}[0-9]{9}"/>
                                        </div>
                                        <div className="form-group">
                                            <label style={{fontWeight: 600}} for="notes" class="form-label">Notes</label>
                                            <textarea class="form-control" rows="1"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="button" className="btn transferCreditBtn" data-bs-dismiss="modal">TRANSFER CREDIT</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* ========================= */}
    </div>
    );
}
export default HomeNav;