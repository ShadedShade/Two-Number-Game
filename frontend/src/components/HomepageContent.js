import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import PinInput from "react-pin-input";


import DateTimePicker from "react-datetime-picker";
import { Modal, Button } from "react-bootstrap";


import EZ2Mechanics from '../img/EZ2-Mechanics.png';
import suertres from '../img/suertres.png';
import fourdigit from '../img/fourdigit.png';

import ez2Icon from '../img/ez2Icon.png';
import s3Icon from '../img/s3Icon.png';
import fdgIcon from '../img/fdgIcon.png';

import TextField from '@material-ui/core/TextField';



import Axios from 'axios';

import '../styles/hpcontent.css'


//todo get all user profile here
function HomepageContent() {
    const history = useHistory();
    const [valueDate, onChangeDate] = useState(new Date());
    let [money, setMoney] = useState("");
    const [gCashNumber, onGcashNumberChange] = useState("");
    const [valueAmount, onAmountChange] = useState("");
    const [agent, onAgentChange] = useState("");
    const [senderName, onSenderChange] = useState("");
    const [reference, onReference] = useState("");

    const [ezTwo, onEzTwo] = useState("");
    const [swerTres, onSwerTres] = useState("");
    const [forDgt, onForDgt] = useState("");
    const [game, onPlayClick] = useState("");


    const [dates, onDates] = useState("");

    money = sessionStorage.getItem("sessionMoney");

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

    const playGame = () =>
    {
        Axios.post('http://localhost:3000/transaction', {
            gameid: game
        }).then((response) => {

        });
    }

    const getDates = () =>
    {
        Axios.get('http://localhost:3000/gameselect').then((response =>
        {
            if(response)
            {
             console.log(response.data);
             for(let i = 0; i< response.data.length;i++)
             {
              let t =   response.data[i].DrawDate.split(/[- : T]/);
              let d = new Date(t[0], t[1]-1, t[2]);
              console.log(t);
                    if(response.data[i].gameid =="Sr3ltt")
                    {

                        onSwerTres(d.toDateString())

                    }
                    if(response.data[i].gameid =="FoDgltt")
                    {

                        onForDgt(d.toDateString())
                    }
                    if(response.data[i].gameid =="Ez2ltt")
                    {
                        onEzTwo(d.toDateString())

                    }
             }
            }
        })).catch((error)=>
        {
            if(error)
            {
                console.log(error);
            }
        })
    }



    /* Modal */
    const generateReference = () => {
        onReference(valueDate + " " + gCashNumber + " " + reference + " " + senderName)
    }



    const transact = () => {
        generateReference();
        Axios.post('http://localhost:3000/transaction', {
            username: sessionStorage.getItem("Userid"), type: 1, method: "Gcash", details: "", amount: valueAmount
        }).then((response) => {
            if (response.data.message) {               //  When Invalid
                // setLoginStatus(response.data.message) /// set this to local storage, btw THIS IS ONLY TEMPORARY HAHAHAHHA, password should be hashed tho
                console.log(response.data.message);
            } else {                        // When True
                // setLoginStatus(response.data[0])
                console.log(response);
                Axios.post('http://localhost:3000/money',
                    {
                        username: sessionStorage.getItem("Userid"), password: sessionStorage.getItem("mPin")
                    }).then((response) => {
                        if (response.data.message) {
                            console.log(response.data.message);
                        }
                        else {
                            console.log(response.data[0].money);

                            sessionStorage.setItem("sessionMoney", response.data[0].money);
                            setMoney(sessionStorage.getItem("sessionMoney"));

                        }
                    })





            }
        });


    }

    return (
        <div>
            <div class="row my-4"></div>
            <div class="col-md-12 div3 px-5 py-4 pt-5">
                <div class="shadow d-flex justify-content-around align-items-center  bal">
                    <div class="balance">
                        <h1>
                            <sup>PTS</sup>
                            {money}
                            <button class="loadwallet" data-bs-toggle="modal" data-bs-target="#load"><span><i class="fas fa-plus-circle"></i></span></button>
                        </h1>
                    </div>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-md-12 px-2 d-flex justify-content-around align-items-center rounded buttons">
                    <div class="col-md-3 buttonPlay">
                        <div class="shadow play">
                            <button class="btn-group threeButton" id="bplay" data-bs-toggle="modal" data-bs-target="#buttonplay"><i class="fas fa-gamepad" id="icon1" style={{ fontSize: "145px" }}></i></button>
                            <label class="description" id="play">Play</label>
                        </div>
                    </div>
                    <div class="col-md-3 buttontix">
                        <div class="shadow mytix">
                            <button class="btn-group threeButton" id="btix" onClick={handleTIcketsClick}><i class="fas fa-ticket-alt" id="icon2" style={{ fontSize: "140px" }}></i></button>
                            <label class="description" id="tix">My Tickets</label>
                        </div>
                    </div>
                    <div class="col-md-3 buttonstats">
                        <div class="shadow stats">
                            <button class="btn-group threeButton" id="bstat" onClick={handleStatisticsClick}><i class="fas fa-star" id="icon3" style={{ fontSize: "125px" }}></i></button>
                            <label class="description" id="stat">Stats</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Load Wallet Modal --> */}
            <div class="modal fade" id="load" tabindex="-1" aria-labelledby="loadModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header loadModalHeader">
                            <h5 class="modal-title" id="loadModalLabel">LOAD <span style={{ color: "#f36e23" }}>WALLET</span></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-5">
                            <form class="pt-5">
                                <div className="form-content">
                                    <div className="row pb-4">
                                        <div className="col-md-6">
                                            <div className="form-group pb-4">
                                                <label for="senderName">Sender Name</label>
                                                <input type="text" id="senderName" className="form-control" onChange={(e) => { onSenderChange(e.target.value) }} />
                                            </div>
                                            <div className="form-group pb-4">
                                                <label for="agentID">Select Agent ID</label>
                                                {/* SELECT MENU HERE */}
                                                <select class="form-select" id="agentID" aria-label="select" defaultValue={"Gcash"} onChange={(e) => { onAgentChange(e.target.value); console.log(e.target.value) }}>
                                                    <option value="" selected> Select Item</option>
                                                    <option value="Gcash">Gcash</option>
                                                    <option value="Paymaya">Paymaya</option>
                                                    <option value="Paypal">Paypal</option>
                                                </select>
                                                {/* ======================= */}
                                            </div>
                                            <div className="form-group pb-4">
                                                <label for="refnum">Reference Number</label>
                                                <input type="text" id="refnum" className="form-control" value={reference} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group pb-4">
                                                <label for="gcashnum">Gcash Number</label>
                                                <input type="tel" id="gcashnum" className="form-control" aria-describedby="basic-addon2" minlength="11" maxlength="11" placeholder="09XXXXXXXXX" pattern="[0-9]{2}[0-9]{9} " onChange={(e) => { onGcashNumberChange(e.target.value) }} />
                                            </div>
                                            <div className="form-group pb-4">
                                                <label for="dtpicker">Select Deposit and Time</label>
                                                {/* npm install react-datetime-picker or yarn add react-datetime-picker */}
                                                <div>
                                                    <DateTimePicker
                                                        className="form-control"
                                                        id="dtpicker"
                                                        onChange={onChangeDate}
                                                        value={valueDate}
                                                    />
                                                </div>

                                                {/* idk kung paano gagawin sorry https://www.npmjs.com/package/react-datetime-picker======================= */}
                                            </div>
                                            <div className="form-group pb-4">
                                                <label for="amount">Amount</label>
                                                <input type="number" id="amount" className="form-control" onChange={(e) => { onAmountChange(e.target.value) }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button type="button" className="btn loadWalletBtn" onClick={transact} data-bs-dismiss="modal">LOAD WALLET</button>
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
            {/* ========================= */}

            {/* Play Game Modal */}
            <div class="modal fade" id="buttonplay" tabindex="-1" aria-labelledby="" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header">
                            LIST OF <span style={{ color: "#f36e23" }}>GAMES</span>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-5">
                        <table class="col-md-12 table table-bordered p-5">
                            <thead>
                                <tr>
                                    <th scope="col">Game Name</th>
                                    <th scope="col" style={{ textAlign: "center" }}>Next Draw Date</th>
                                    <th scope="col" style={{ textAlign: "center" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>EZ2 Lotto</td>
                                    <td style={{ textAlign: "center" }}>{ezTwo}</td>
                                    <td>
                                        <div style={{ textAlign: "center" }}>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#ez2m" style={{ marginRight: "2px" }}>MECHANICS</button>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#ez2game" style={{ marginLeft: "2px" }} value="Ez2ltt" onClick={(e)=>{onPlayClick(e.target.value); console.log(e.target.value)}}>BET NOW</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Suertres Lotto</td>
                                    <td style={{ textAlign: "center" }}>{swerTres}</td>
                                    <td>
                                        <div style={{ textAlign: "center" }}>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#s3m" style={{ marginRight: "2px" }}>MECHANICS</button>
                                            <button type="button" style={{ marginLeft: "2px" }}value="Sr3ltt" onClick={(e)=>{onPlayClick(e.target.value); console.log(e.target.value)}}>BET NOW</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4DG Lotto</td>
                                    <td style={{ textAlign: "center" }}>{forDgt}</td>
                                    <td>
                                        <div style={{ textAlign: "center" }}>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#fDm" style={{ marginRight: "2px" }}>MECHANICS</button>
                                            <button type="button" style={{ marginLeft: "2px" }}value="FoDgltt" onClick={(e)=>{onPlayClick(e.target.value); console.log(e.target.value)}}>BET NOW</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>                    
                </div>
            </div>
            {/* EZ2 Mechanics */}
            <div class="modal fade" id="ez2m" tabindex="-1" aria-labelledby="" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header mechanicsmodalheader">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-5">
                            <img src={EZ2Mechanics} alt=""/>
                        </div>
                    </div>
                </div>                  
            </div>
            {/* ========================= */}

            {/* Suertres Mechanics */}
            <div class="modal fade" id="s3m" tabindex="-1" aria-labelledby="" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header mechanicsmodalheader">               
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-5">
                            <img src={suertres} alt=""/>
                        </div>
                    </div>                
                </div>                
            </div>                                                
            {/* ========================= */}

            {/* 4DG Mechanics */}
            <div class="modal fade" id="fDm" tabindex="-1" aria-labelledby="" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header mechanicsmodalheader">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-5">
                            <img src={fourdigit} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========================= */}

            {/* EZ2 - GAME */}
            <div class="modal fade" id="ez2game" tabindex="-1" aria-labelledby="" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content modal-content-scrollable ez2playgame" style={{background: "#f0f3f4"}}>
                        <div class="modal-header mechanicsmodalheader">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="col-md-12">
                            <div className="px-3 d-flex justify-content-around align-items-center">
                                <div className="col-md-6 d-flex px-2 justify-content-end">
                                    <img className="icon" src={ez2Icon} alt=""/>
                                </div>
                                <div className="col-md-6 px-2 d-flex m-0">
                                    <h1 className="iconlabel">EZ2 <span style={{color: "#f36e23"}}>Lotto</span></h1> 
                                </div>  
                            </div>
                        </div>
                        <div className="row">
                            <form>
                                <div className="form-content px-5">
                                    <div className="step1 mx-5 py-4">
                                        <label style = {{fontWeight: "600"}} for="datetime">Choose <span style={{color: "#f36e23"}}>Draw Date</span></label>
                                        <div className="row shadow py-4 border-1 rectangle" id="datetime" style= {{border: "1px solid #262626", borderRadius: ".25rem"}}>
                                            <div className="col-md-6">
                                                <div className="form-group drawdate px-5">
                                                    <TextField
                                                        style = {{border: "1px solid #262626", borderRadius: ".25rem", height: "35px", background: "white"}}
                                                        id="date"
                                                        type="date"
                                                        defaultValue="YYYY-MM-DD"
                                                        fullWidth
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group px-5">
                                                    {/* SELECT MENU HERE */}
                                                    <select class="form-select drawtime" id="drawtime" aria-label="select" defaultValue="def">
                                                        <option value="def" selected>Choose time</option>
                                                    </select>
                                                    {/* ======================= */}
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="step2 mx-5 py-4">
                                        <label style = {{fontWeight: "600"}} for="combination">Choose <span style={{color: "#f36e23"}}>Combination</span></label>
                                        <div className="row shadow py-4 border-1 rectangle" id="combination" style= {{border: "1px solid #262626", borderRadius: ".25rem"}}>
                                            <div className="col-md-12">
                                                <div className="form-group px-5">
                                                    <PinInput 
                                                        length={2} 
                                                        initialValue=""
                                                        onChange={(value, index) => {}} 
                                                        type="numeric" 
                                                        inputMode="number"
                                                        style={{padding: '10px', textAlign:'center'}}  
                                                        inputStyle={{background: '#c6c7c9', border: 'none'}}
                                                        inputFocusStyle={{border: '1px solid #f36e23', background:'white'}}
                                                        onComplete={(value, index) => {}}
                                                        autoSelect={true}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12 pt-4">
                                                <div className="btn-toolbar numpad">
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">1</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">2</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">3</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">4</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">5</button>
                                                </div>
                                            </div>
                                            <div className="col-md-12 pt-4">
                                                <div className="btn-toolbar numpad">
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">6</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">7</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">8</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">9</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">10</button>
                                                </div>
                                            </div>
                                            <div className="col-md-12 pt-4">
                                                <div className="btn-toolbar numpad">
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">11</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">12</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">13</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">14</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">15</button>
                                                </div>
                                            </div>
                                            <div className="col-md-12 pt-4">
                                                <div className="btn-toolbar numpad">
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">16</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">17</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">18</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">19</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">20</button>
                                                </div>
                                            </div>
                                            <div className="col-md-12 pt-4">
                                                <div className="btn-toolbar numpad">
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">21</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">22</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">23</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">24</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">25</button>
                                                </div>
                                            </div>
                                            <div className="col-md-12 pt-4">
                                                <div className="btn-toolbar numpad">
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">26</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">27</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">28</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">29</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">30</button>
                                                </div>
                                            </div>
                                            <div className="col-md-12 pt-4">
                                                <div className="btn-toolbar numpad">
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">31</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">32</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">33</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">34</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">35</button>
                                                </div>
                                            </div>
                                            <div className="col-md-12 pt-4 pb-3">
                                                <div className="btn-toolbar numpad">
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">36</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">37</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">38</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">39</button>
                                                    <button type="button" class="btn mx-5 btn-default btn-circle btn-xl">40</button>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="step3 mx-5 py-4">
                                        <label style = {{fontWeight: "600"}} for="combination">Choose <span style={{color: "#f36e23"}}>Amount</span></label>
                                        <div className="row shadow py-4 border-1 rectangle" id="combination" style= {{border: "1px solid #262626", borderRadius: ".25rem"}}>
                                            <div className="col-md-12">
                                                <div className="form-group px-5">
                                                    <PinInput 
                                                        length={2} 
                                                        initialValue=""
                                                        onChange={(value, index) => {}} 
                                                        type="numeric" 
                                                        inputMode="number"
                                                        style={{padding: '10px', textAlign:'center'}}  
                                                        inputStyle={{background: '#c6c7c9', border: 'none'}}
                                                        inputFocusStyle={{border: '1px solid #f36e23', background:'white'}}
                                                        onComplete={(value, index) => {}}
                                                        autoSelect={true}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12 pt-4">
                                                <div className="btn-toolbar amount">
                                                    <button type="button" class="btn mx-5 btnamount">5</button>
                                                    <button type="button" class="btn mx-5 btnamount">10</button>
                                                    <button type="button" class="btn mx-5 btnamount">20</button>
                                                    <button type="button" class="btn mx-5 btnamount">50</button>
                                                    <button type="button" class="btn mx-5 btnamount">100</button>
                                                </div>
                                            </div>
                                            <div className="col-md-12 pb-3 pt-5 px-5">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="floatingInput" placeholder="09XXXXXXXXX"/>
                                                    <label for="floatingInput">Enter Bettor's UserID / Mobile Number (Optional)</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12 pt-4 px-5">
                                                <div class="d-grid gap-2 col-6 mx-auto">
                                                    <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#ez2Bet">BET</button>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>                       
                                </div>
                            </form>          
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== */}           

            {/* S3 - GAME */}
            {/* ========== */}

            {/* 4DG - GAME */}
            {/* ========== */}



            {/* ================== BET MODALS ============== */}
                {/* EZ2 BET MODAL */}
                <div class="modal fade" id="ez2Bet" tabindex="-1" aria-labelledby="" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content">
                            <div class="modal-header betmodalheader">
                                <h5 class="modal-title" id="betModalLabel">Selected<span style={{ color: "#f36e23" }}> Combination</span></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body p-5">
                                <div className="row py-4 border-1 rectangle" style={{columnGap: "39px", justifyContent: "center"}}>
                                    <div className="shadow border-1 col-md-5 pb-3 pt-2" style= {{border: "1px solid #262626", borderRadius: ".25rem"}}>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <h3 class="form-check-label pt-4 mx-5" for="flexCheckDefault">
                                                <span style={{ color: "#f36e23" }}>Draw</span>Date:
                                                <br/>Combination:
                                                <br/>Total:
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="shadow border-1 col-md-5 pb-3 pt-2" style= {{border: "1px solid #262626", borderRadius: ".25rem"}}>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <h3 class="form-check-label pt-4 mx-5" for="flexCheckDefault">
                                                <span style={{ color: "#f36e23" }}>Draw</span>Date:
                                                <br/>Combination:
                                                <br/>Total:
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-4 border-1 rectangle" style={{columnGap: "39px", justifyContent: "center"}}>
                                    <div className="shadow border-1 col-md-5 pb-3 pt-2" style= {{border: "1px solid #262626", borderRadius: ".25rem"}}>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <h3 class="form-check-label pt-4 mx-5" for="flexCheckDefault">
                                                <span style={{ color: "#f36e23" }}>Draw</span>Date:
                                                <br/>Combination:
                                                <br/>Total:
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="shadow border-1 col-md-5 pb-3 pt-2" style= {{border: "1px solid #262626", borderRadius: ".25rem"}}>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <h3 class="form-check-label pt-4 mx-5" for="flexCheckDefault">
                                                <span style={{ color: "#f36e23" }}>Draw</span>Date:
                                                <br/>Combination:
                                                <br/>Total:
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 pt-5">
                                    <div className="btn-toolbar amount">
                                        <button type="button" class="btn mx-2 btnAddMore">ADD MORE</button>
                                        <button type="button" class="btn mx-2 btnCheckout">CHECKOUT</button>
                                        <button type="button" class="btn mx-2 btnRemove">REMOVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                  
                </div>
                {/* ============= */}

            {/* ============================================ */}
        </div>
    );
}

export default HomepageContent