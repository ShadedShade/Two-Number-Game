import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import DateTimePicker from 'react-datetime-picker';
import '../styles/hpcontent.css'


//todo get all user profile here
function HomepageContent() {
        const history = useHistory();
        const handlePlayClick = () => {
            history.push('/');
        }
        const handleTIcketsClick = () => {
            history.push('/');
        }
        const handleStatisticsClick = () => {
            history.push('/');
        }
        const handleAddFundsClick = () => {
            history.push('/');
        }
    
    return (
        <div>
                <div class="row my-4"></div>
                <div class="col-md-12 div3 px-5 py-4 pt-5">
                    <div class="shadow d-flex justify-content-around align-items-center  bal">
                        <div class="balance">
                            <h1>
                                <sup>PTS</sup> 
                                1,001,115.00
                                <button class="loadwallet" data-bs-toggle="modal" data-bs-target="#load"><span><i class="fas fa-plus-circle"></i></span></button>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col-md-12 px-2 d-flex justify-content-around align-items-center rounded buttons">
                        <div class="col-md-3 buttonPlay">
                            <div class="shadow play">
                                <button class="btn-group threeButton" id="bplay"onClick={handlePlayClick}><i class="fas fa-gamepad" id="icon1" style={{fontSize:"145px"}}></i></button>                            
                                <label class="description" id="play">Play</label>
                            </div>
                        </div>
                        <div class="col-md-3 buttontix">
                            <div class="shadow mytix">
                                <button class="btn-group threeButton" id="btix" onClick={handleTIcketsClick}><i class="fas fa-ticket-alt" id="icon2" style={{fontSize:"140px"}}></i></button>
                                <label class="description" id="tix">My Tickets</label>
                            </div>
                        </div>
                        <div class="col-md-3 buttonstats">
                            <div class="shadow stats">
                                <button class="btn-group threeButton" id="bstat"onClick={handleStatisticsClick}><i class="fas fa-star" id="icon3" style={{fontSize:"125px"}}></i></button>
                                <label class="description" id="stat">Stats</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id="load" tabindex="-1" aria-labelledby="loadModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                    <div class="modal-header loadModalHeader">
                        <h5 class="modal-title" id="loadModalLabel">Load <span style={{color: "#f36e23"}}>Wallet</span></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-5">
                        <form class="pt-5">
                            <div className="form-content">
                                <div className="row pb-4">
                                    <div className="col-md-6">
                                        <div className="form-group pb-4">
                                            <label for="senderName">Sender Name</label>
                                            <input type="text" id="senderName" className="form-control" />
                                        </div>
                                        <div className="form-group pb-4">
                                            <label for="agentID">Select Agent ID</label>
                                            {/* SELECT MENU HERE */}
                                            <select class="form-select" id="agentID" aria-label="select">
                                                <option selected></option>
                                                <option value="1">First</option>
                                                <option value="2">Second</option>
                                                <option value="3">Third</option>
                                            </select>
                                            {/* ======================= */}
                                        </div>
                                        <div className="form-group pb-4">
                                            <label for="refnum">Reference Number</label>
                                            <input type="text" id="refnum" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group pb-4">
                                            <label for="gcashnum">Gcash Number</label>
                                            <input type="tel" id="gcashnum" className="form-control" aria-describedby="basic-addon2" minlength="11" maxlength="11" placeholder="09XXXXXXXXX" pattern="[0-9]{2}[0-9]{9}"/>
                                        </div>
                                        <div className="form-group pb-4">
                                            <label for="dtpicker">Select Deposit and Time</label>
                                            {/* npm install react-datetime-picker or yarn add react-datetime-picker */}
                                                <div>
                                                    <DateTimePicker 
                                                        className="form-control"
                                                        id="dtpicker"
                                                        // onChange={onChange}
                                                        // value={value}
                                                    />
                                                </div>
                                                
                                            {/* idk kung paano gagawin sorry https://www.npmjs.com/package/react-datetime-picker======================= */}
                                        </div>
                                        <div className="form-group pb-4">
                                            <label for="amount">Amount</label>
                                            <input type="number" id="amount" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="button" className="btn loadWalletBtn">LOAD WALLET</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer loadModalFooter">
                        <button type="button" class="btn btn-secondary loadModalCloseBtn" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
}
export default HomepageContent