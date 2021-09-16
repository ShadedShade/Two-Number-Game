import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import PinInput from "react-pin-input";

import DateTimePicker from "react-datetime-picker";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";


import EZ2Mechanics from '../img/EZ2-Mechanics.png';
import suertres from '../img/suertres.png';
import fourdigit from '../img/fourdigit.png';

import ez2Icon from '../img/ez2Icon.png';
import s3Icon from '../img/s3Icon.png';
import fdgIcon from '../img/fdgIcon.png';

import TextField from '@material-ui/core/TextField';

import BackspaceIcon from '@material-ui/icons/Backspace';


import Axios from 'axios';

import '../styles/hpcontent.css'


let combo = [23, 2]
let maxPin = 2;
let image = ez2Icon;
let gameDrawDate = "2021-09-21";
let gameShift = "10:00:00";
let user = sessionStorage.getItem("Userid");
let currentGame = "";
let gameName = "EZ2 Lotto"
let totalAmount = 0;

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function toLocalString(date) {
    let utcDate = new Date(date).toLocaleDateString().split('/');
    let localizeDate = utcDate.join("-");
    return localizeDate;
}

let gameShiftTime = [];
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
    const [selectedGameID, onPlayGame] = useState("");
    const [betList, onBetsAdd] = useState("");

    const [ezTwo, onEzTwo] = useState("");
    const [swerTres, onSwerTres] = useState("");
    const [forDgt, onForDgt] = useState("");
    const [game, onPlayClick] = useState("");
    let [dateList, setDates] = useState([]);
    let [shiftList, setShifts] = useState([]);
    let [gameDrawDate, setDrawDate] = useState("");
    let [gameDrawShift, setShiftTime] = useState("");
    const [hasDates, checkDates] = useState(false);
    const [hasShift, checkShift] = useState(false);
    const [comboChanged, changedPinValue] = useState(false)
    let [combination, setCombination] = useState([]);
    const [betAmountChanged, changedbetAmount] = useState(false)
    let [betAmount, setbetAmount] = useState(0);
    const [bettor, onChangeBettor] = useState(user);
    //dateList.push({date:""})
    console.log("^^")
    console.log(dateList);
    console.log(shiftList);
    console.log("^^")

    const [dates, onDates] = useState("");

    money = sessionStorage.getItem("sessionMoney");
    let gameDetails = [];
    let gameDates = [];



    const handleHomeClick = () => {
        history.push('/Home');
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


    const [values, setValues] = useState(["", "", "", ""]);





    const playGame = (id) => {
        console.log(id);

        switch (id) {
            case "Ez2ltt":
                currentGame = "Ez2ltt";
                maxPin = 2;
                image = ez2Icon;
                gameName = "EZ2"
                break;
            case "Sr3ltt":
                currentGame = "sr3ltt";
                maxPin = 3;
                image = s3Icon;
                gameName = "Suertres"
                break;
            case "FoDgltt":
                currentGame = "FoDgltt";
                maxPin = 4;
                image = fdgIcon;
                gameName = "4DG"
                break;
        }

        gameDetails.length = 0;
        Axios.post('http://localhost:3000/selected', {
            gameid: id
        }).then((response) => {
            console.log(response.data.length);
            gameDetails = response.data;
            let tempDateStorage = [];
            // console.log(gameDetails)
            if (response.data.length > 0) {
                tempDateStorage.push(gameDetails.filter(shift => shift.DrawDate == gameDetails.includes(shift.DrawDate)))
                //check if array already contains this date, if not push it
                for (let i = 0; i < gameDetails.length; i++) {   // push the first date if the length is 0
                    if (gameDates.length == 0) {
                        let utcDate = new Date(gameDetails[i].DrawDate).toLocaleDateString().split('/');
                        let localizeDate = utcDate.join("-");
                        gameDates.push(gameDetails[i].DrawDate)
                        dateList[0] = localizeDate;
                        console.log(gameDates[0]);
                        console.log(gameDates);
                    }
                    else {
                        // if has contents check each index if it has content == game date

                        for (let j = 0; j < gameDates.length; j++) {
                            if (gameDates[j] != gameDetails[i].DrawDate) {
                                console.log("Date: " + toLocalString(gameDetails[i].DrawDate));
                                let localTime = toLocalString(gameDetails[i].DrawDate);
                                gameDates.push(gameDetails[i].DrawDate)
                                dateList.push(localTime)

                            }
                        }
                    }
                }
                // set Shift times
                // iterate to the dates
                for (let ii = 0; ii < gameDates.length; ii++) {
                    for (let jj = 0; jj < gameDetails.length; jj++) // iterate on each detail
                    {
                        if (gameDetails[jj].DrawDate == gameDates[ii]) {

                            console.log(gameDetails[jj].ShiftTime);
                            gameShiftTime[jj] = { shift: gameDetails[jj].ShiftTime, DrawID: gameDetails[jj].DrawID, drawDate: gameDetails[jj].DrawDate };


                        }
                    }
                }
                sessionStorage.setItem("shifts", gameShiftTime);
                // console.log(gameDetails);
                console.log(gameShiftTime[0]);
                // console.log(gameDates);
                dateList = [{ date: gameDates }];
                // console.log(dateList);
                // console.log("dateList");
                // console.log(dateList[0].date[0]);
                let newDates = [];
                for (let i = 0; i < dateList[0].date.length; i++) {
                    newDates.push(dateList[0].date[i]);
                    console.log(newDates[i]);
                }

                // console.log("Shifts");
                let x = sessionStorage.getItem("shifts");
                //    console.log(x[0]);
                // console.log(newDates);
                // console.log("new");
                // dateList = newDates;
                // console.log(dateList);
                // console.log("new");
                // console.log("insideplayGame datelength: " + dateList);
                checkDates(true);
                // dateList[0].date.map(function(item,i)
                // {
                //     console.log(item)
                //     console.log(i)
                // })

                // console.log(dateList[0].date[0]);

            }
        });
    }
    let [gameDrawList, onGameDrawListChange] = useState([]);
    let [gameDraw, onGameDrawChange] = useState("");
    const changeShiftAccordingtoDate = (drawDate) => {
        gameDrawDate = drawDate.slice(0, 10);
        console.log(gameDrawDate);
        setDrawDate(gameDrawDate);
        gameDrawList.length = 0;
        let tempShifts = [];
        let shiftDetails = gameShiftTime;
        shiftList = [];
        console.log(shiftDetails[0]);
        for (let i = 0; i < shiftDetails.length; i++) {
            if (shiftDetails[i] != undefined) {
                console.log("gst: " + shiftDetails[i].drawDate.slice(0, 10) + " " + drawDate.slice(0, 10))
                console.log(shiftDetails[i].drawDate.slice(0, 10) == drawDate.slice(0, 10))
                if (toLocalString(shiftDetails[i].drawDate) == drawDate.slice(0, 10)) {
                    console.log("shift2D: " + shiftDetails[i].shift + " " + drawDate)

                    tempShifts.push(shiftDetails[i].shift);
                    shiftList.push(shiftDetails[i].shift);
                    gameDrawList.push(shiftDetails[i].DrawID);

                }
            }



        }
        // given a date filter shift
        //console.log(tempShifts);
        setShifts([...shiftList]);
        onGameDrawListChange([...gameDrawList]);
        console.log(shiftList + " " + hasShift);
    }

    const changeShiftTime = (shift) => {
        setShiftTime(shift);
        console.log(gameShiftTime);
        for (let i = 0; i < gameShiftTime.length; i++) {
            if (toLocalString(gameShiftTime[i].drawDate) == gameDrawDate) {
                if (gameShiftTime[i].shift == shift) {
                    console.log(gameShiftTime[i].DrawID);
                    gameDraw = gameShiftTime[i].DrawID;
                    onGameDrawChange(gameDraw);
                }
            }
        }

    }

    useEffect(() => {
        setMoney(money);
        console.log(money);
    }, [money]);
    useEffect(() => {
        console.log('COMBO ' + combination.length);
        if (combination.length > 0)
            changedPinValue(true);
        else
            changedPinValue(false);

    }, [combination]);
    useEffect(() => {
        console.log('bet ' + betAmount.length);
        if (betAmount.length > 0)
            changedbetAmount(true);

    }, [betAmount]);

    useEffect(() => {
        console.log("EFFECT: " + shiftList + " " + shiftList.length);
        if (shiftList.length > 0) {
            checkShift(true);
        }
    }, [shiftList]);
    // useEffect(() => {
    //     console.log("EFFECT: " + shiftList + " " + shiftList.length);
    //     if (shiftList.length > 0) {
    //         checkShift(true);
    //     }
    // }, [shiftList]);

    const chooseDatesDropDown = () => {
        console.log("datelist length: " + dateList)
        if (hasDates) {
            return (dateList.map((item, i) => <option value={item} key={i}>{item.slice(0, 10)}</option>));
        }
        else {
            return;
        }
    }
    let chooseShiftTimeDropDown = () => {
        console.log("dateShift inside length: " + shiftList)
        if (hasShift) {
            console.log(shiftList)
            return shiftList.map((item, i) => <option value={item} key={i}>{item}</option>);
        }
        else {
            return;
        }
    }

    const SetupComboPin = (num) => {
        console.log("why is this one?: " + num);
        if (combination.length < maxPin) {
            combination.push(num.toString());
            setCombination([...combination]);
        }
        else {
            console.log("full cap");
        }
    }
    const removeCombo = () => {
        combination.length = 0;
        setCombination([...combination]);

    }
    let CombinationPin = () => {
        // e.g 2
        let buttonValues = Array(maxPin).fill("");
        if (comboChanged) {
            buttonValues = combination;
            return buttonValues.map((item, i) => <button type="button" disabled={true} class="btn mx-3 btn-default btn-circle btn-xl combibtn" key={i}>{item}</button>);

        }
        else
            return buttonValues.map((item, i) => <button type="button" disabled={true} class="btn mx-3 btn-default btn-circle btn-xl combibtn" key={i}></button>);

    }
    const SetupBetInput = (num) => {
        console.log("why is this one?: " + num);
        if (betAmount.length < 1) {
            betAmount.push(num.toString());
        }
        else {
            betAmount = num;
        }
        setbetAmount(betAmount);
    }
    let betInputPin = () => {
        // e.g 2
        let buttonValues = Array(maxPin).fill("");
        if (betAmountChanged) {

            buttonValues = combination;
            return buttonValues.map((item, i) => <button type="button" disabled={true} class="btn mx-5 btn-default btn-circle btn-xl betinputbtn" key={i}>{item}</button>);


        }
        else
            return buttonValues.map((item, i) => <button type="button" disabled={true} class="btn mx-5 btn-default btn-circle btn-xl betinputbtn" key={i}>0</button>);

    }


    const getDates = () => {
        // initialize value
        Axios.get('http://localhost:3000/gameselect').then((response) => {
            if (response) {
                console.log(response.data);
                for (let i = 0; i < response.data.length; i++) {
                    let t = toLocalString(response.data[i].DrawDate);

                    console.log(t);
                    if (response.data[i].gameid == "Sr3ltt") {

                        onSwerTres(t)
                        onPlayGame("Sr3ltt")
                        maxPin = 3;

                    }
                    if (response.data[i].gameid == "FoDgltt") {

                        onForDgt(t)
                        onPlayGame("FoDgltt")
                        maxPin = 4;
                    }
                    if (response.data[i].gameid == "Ez2ltt") {
                        onEzTwo(t)
                        onPlayGame("Ez2ltt")
                        maxPin = 2;

                    }

                }
            }
        }).catch((error) => {
            if (error) {
                console.log(error);
            }
        });

    }
    const [listOfBets, onShowBets] = useState([])
    const [betChange, onChangeBets] = useState(false)
    useEffect(() => {
        console.log('listOfBets ' + listOfBets.length);
        if (listOfBets.length > 0)
            onChangeBets(true);
        else
            onChangeBets(false);

    }, [listOfBets]);
    const generateTicket = () => {
        let amount = betAmount;
        let toBettor = bettor == "" ? user : bettor;
        console.log(gameDrawDate);
        let drawDate = gameDrawDate;
        let drawShift = gameDrawShift;
        let drawID = gameDraw;
        let numbCombo = combination.join('-');
        //<----  From Input this should be the contents from the Front
        if (amount == 0 || drawDate == "" || drawShift == "" || numbCombo == "") {
            console.log("you forgot a field");
            return;

        }
        let ticket = { DrawID: drawID, DrawDate: drawDate, DrawShift: drawShift, BetAmount: amount, Bettor: toBettor, Combo: numbCombo }
        console.log("TICKET:" + drawID + " " + currentGame);

        listOfBets.push(ticket);
        onShowBets([...listOfBets])
        console.log(listOfBets);
        console.log(listOfBets[0].Bettor);
    }
    const generateTicketUI = () => {

        if (betChange)
            return (listOfBets.map((item, i) =>
                <div className="row py-4 border-1 rectangle" style={{ columnGap: "39px", justifyContent: "center" }}>
                    <div className="shadow border-1 col-md-5 pb-3 pt-2" style={{ border: "1px solid #262626", borderRadius: ".25rem" }}>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <h3 class="form-check-label pt-4 mx-5" for="flexCheckDefault">
                                <span style={{ color: "#f36e23" }}>Draw</span>Date: {item.DrawDate}
                                <br />Shift Time: {item.DrawShift}
                                <br />Combination: {item.Combo}
                                <br />Total: {item.BetAmount}
                            </h3>
                        </div></div>
                </div>));
        else {
            return <h1>Nothing to Display</h1>
        }

    }

    let [receipt, onReceipt] = useState({ receipt: "", balance: 0 })
    const [hasReceipt, onShowReceipt] = useState(false)
    useEffect(() => {
        console.log('receipt ' + receipt.length);
        if (listOfBets.length > 0)
            onShowReceipt(true);
        else
            onShowReceipt(false);

    }, [receipt]);

    const generateTicketForReceipt = () => {

        if (hasReceipt)

            return (receipt.receipt.map((item, i) =>
                <tr>
                    <td>
                        <span class="text-inverse">Draw Date</span><br></br>
                        <b class="databold"><span class="text-inverse">{toLocalString(item.DrawDate)}</span></b><br></br>
                        <b class="databold"><span class="text-inverse">{item.ShiftTime}</span></b>
                    </td>
                    <td>
                        <span class="text-inverse">Ticket No.</span><br></br>
                        <b class="databold"><span class="text-inverse">{item.ticketid}</span></b><br></br>
                        <b class="databold"><span class="text-inverse"></span></b>
                    </td>
                    <td>
                        <span class="text-inverse">Combination</span><br></br>
                        <b class="databold"><span class="text-inverse">{item.combo}</span></b><br></br>
                        <b class="databold"><span class="text-inverse"></span></b>
                    </td>
                    <td>
                        <span class="text-inverse">Amount</span><br></br>
                        <b class="databold"><span class="text-inverse">{item.BetAmount}</span></b><br></br>
                        <b class="databold"><span class="text-inverse"></span></b>
                    </td>
                </tr>))

    }

    const generateReceiptTotalAmount = () => {
        if (hasReceipt)
        {
          totalAmount = 0;
          console.log(receipt.receipt);
            receipt.receipt.forEach(amount => {
                totalAmount+= amount.BetAmount;                
                console.log(amount.BetAmount);
            });
           return (<tr style={{ textAlign: "right" }}>
                <td colspan="4" class="pt-3" style={{ paddingRight: "38px" }}>
                    <span class="text-inverse">Total Amount</span><br></br>
                    <b class="databold"><span class="text-inverse">{totalAmount}</span></b>
                </td>
            </tr>)
        }
            else
            {
                return;
            }
    }

    // GENERATE RECEIPT :D
    const generateTicketReceipt = () => {

        // listOfBets array contains these
        // user id
        // game id
        //
        // let drawID = gameDraw;
        // let amount = betAmount;
        // let toBettor = bettor;
        // let drawDate = gameDrawDate;
        // let drawShift = gameDraw;
        // let numbCombo = combination.join('-');
        console.log(gameDrawDate);


        let userid = user;
        let gameid = currentGame;
        let bets = listOfBets;
        console.log(listOfBets);

        Axios.post('http://localhost:3000/placeBets', {
            User: userid, GameID: gameid, Wager: JSON.stringify(bets)
        }).then((response) => {
            if (response.data.err) {
                console.log(response.data.err)
            }
            else {
                receipt.length = 0;
                console.log(response.data);
                money = response.data.balance
                setMoney(money);
                sessionStorage.setItem("sessionMoney", money);
                console.log("WHAT IS MONEY: " + money);
                receipt = response.data;
                onReceipt(receipt);
                console.log(receipt.receipt);
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


    return (<div>
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
                        <button class="btn-group threeButton" id="bplay" data-bs-toggle="modal" data-bs-target="#buttonplay"><i class="fas fa-gamepad" id="icon1" style={{ fontSize: "145px" }} onClick={getDates}></i></button>
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
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#ez2game" style={{ marginLeft: "2px" }} value="Ez2ltt" onClick={(e) => { onPlayClick(e.target.value); console.log(e.target.value); playGame(e.target.value); }}>BET NOW</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Suertres Lotto</td>
                                    <td style={{ textAlign: "center" }}>{swerTres}</td>
                                    <td>
                                        <div style={{ textAlign: "center" }}>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#s3m" style={{ marginRight: "2px" }}>MECHANICS</button>

                                            <button type="button" data-bs-toggle="modal" data-bs-target="#ez2game" style={{ marginLeft: "2px" }} value="Sr3ltt" onClick={(e) => { onPlayClick(e.target.value); console.log(e.target.value); playGame(e.target.value); }}>BET NOW</button>

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4DG Lotto</td>
                                    <td style={{ textAlign: "center" }}>{forDgt}</td>
                                    <td>
                                        <div style={{ textAlign: "center" }}>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#fDm" style={{ marginRight: "2px" }}>MECHANICS</button>
                                            <button type="button" style={{ marginLeft: "2px" }} data-bs-toggle="modal" data-bs-target="#ez2game" value="FoDgltt" onClick={(e) => { onPlayClick(e.target.value); console.log(e.target.value); playGame(e.target.value); }}>BET NOW</button>
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
                        <img src={EZ2Mechanics} alt="" />
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
                        <img src={suertres} alt="" />
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
                        <img src={fourdigit} alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* ========================= */}

        {/* EZ2 - GAME */}
        <div class="modal fade" id="ez2game" tabindex="-1" aria-labelledby="" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content modal-content-scrollable ez2playgame" style={{ background: "#f0f3f4" }}>
                    <div class="modal-header mechanicsmodalheader">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="col-md-12">
                        <div className="px-3 d-flex justify-content-around align-items-center">
                            <div className="col-md-6 d-flex px-2 justify-content-end">
                                <img className="icon" src={image} alt="" />
                            </div>
                            <div className="col-md-6 px-2 d-flex m-0">
                                <h1 className="iconlabel">{gameName} <span style={{ color: "#f36e23" }}>Lotto</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <form>
                            <div className="form-content px-5">
                                <div className="step1 mx-5 py-4">
                                    <label style={{ fontWeight: "600" }} for="datetime">Choose <span style={{ color: "#f36e23" }}>Draw Date</span></label>
                                    <div className="row shadow py-4 border-1 rectangle" id="datetime" style={{ border: "1px solid #262626", borderRadius: ".25rem" }}>
                                        <div className="col-md-6">
                                            <div className="form-group px-5">
                                                {/* SELECT MENU HERE */}

                                                <select class="form-select drawdate" id="drawdate" aria-label="select" defaultValue="def" onChange={(e) => { changeShiftAccordingtoDate(e.target.value) }}>
                                                    <option value="def" selected>Choose Date</option>
                                                    {chooseDatesDropDown()}
                                                </select>
                                                {/* ======================= */}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group px-5">
                                                {/* SELECT MENU HERE */}
                                                <select class="form-select drawtime" id="drawtime" aria-label="select" defaultValue="def" onChange={(e) => { changeShiftTime(e.target.value) }}>
                                                    <option value="def" selected>Choose Time</option>
                                                    {chooseShiftTimeDropDown()}
                                                </select>
                                                {/* ======================= */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="step2 mx-5 py-4">
                                    <label style={{ fontWeight: "600" }} for="combination">Choose <span style={{ color: "#f36e23" }}>Combination</span></label>
                                    <div className="row shadow py-4 border-1 rectangle" id="combination" style={{ border: "1px solid #262626", borderRadius: ".25rem" }}>
                                        <div className="col-md-12">
                                            <div className="form-group px-5">
                                                <div className="col-md-12 pt-4">
                                                    {/* PIN LOCATION HERE */}
                                                    <div className="btn-toolbar numpad">
                                                        <div style={{ display: "flex" }}>
                                                            <div style={{ display: "flex", marginLeft: "59px" }}>
                                                                {CombinationPin()}
                                                            </div>

                                                            <div style={{ display: "flex", width: "70px", placeContent: "center", flexWrap: "wrap", marginLeft: "-13px" }} onClick={removeCombo}>

                                                                <BackspaceIcon
                                                                    fontSize="large"
                                                                    cursor="pointer"

                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>1</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>2</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>3</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>4</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>5</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>6</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>7</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>8</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>9</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>10</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>11</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>12</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>13</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>14</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>15</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>16</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>17</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>18</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>19</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>20</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>21</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>22</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>23</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>24</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>25</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>26</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>27</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>28</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>29</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>30</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>31</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>32</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>33</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>34</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>35</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4 pb-3">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>36</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>37</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>38</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>39</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>40</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="step3 mx-5 py-4">
                                    <label style={{ fontWeight: "600" }} for="combination">Choose <span style={{ color: "#f36e23" }}>Amount</span></label>
                                    <div className="row shadow py-4 border-1 rectangle" id="combination" style={{ border: "1px solid #262626", borderRadius: ".25rem" }}>
                                        <div className="col-md-12">
                                            <div className="form-group px-5">

                                                <div className="btn-toolbar numpad">
                                                    {betInputPin()}
                                                </div>
                                                {/* <PinInput
                                                    length={2}
                                                    initialValue=""
                                                    onChange={(value, index) => { }}
                                                    type="numeric"
                                                    inputMode="number"
                                                    style={{ padding: '10px', textAlign: 'center' }}
                                                    inputStyle={{ background: '#c6c7c9', border: 'none' }}
                                                    inputFocusStyle={{ border: '1px solid #f36e23', background: 'white' }}
                                                    onComplete={(value, index) => { }}
                                                    autoSelect={true}
                                                /> */}
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar amount">
                                                <button type="button" class="btn mx-5 btnamount" onClick={(e) => { SetupBetInput(e.currentTarget.childNodes[0].textContent); }}>5</button>
                                                <button type="button" class="btn mx-5 btnamount" onClick={(e) => { SetupBetInput(e.currentTarget.childNodes[0].textContent); }}>10</button>
                                                <button type="button" class="btn mx-5 btnamount" onClick={(e) => { SetupBetInput(e.currentTarget.childNodes[0].textContent); }}>20</button>
                                                <button type="button" class="btn mx-5 btnamount" onClick={(e) => { SetupBetInput(e.currentTarget.childNodes[0].textContent); }}>50</button>
                                                <button type="button" class="btn mx-5 btnamount" onClick={(e) => { SetupBetInput(e.currentTarget.childNodes[0].textContent); }}>100</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pb-3 pt-5 px-5">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInput" placeholder={user} onChange={(e) => { onChangeBettor(e.target.value); console.log(bettor) }} />
                                                <label for="floatingInput">Enter Bettor's UserID / Mobile Number (Optional)</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4 px-5">
                                            <div class="d-grid gap-2 col-6 mx-auto">
                                                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#betModal" onClick={generateTicket}>BET</button>
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
        <div class="modal fade" id="s3game" tabindex="-1" aria-labelledby="" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content modal-content-scrollable ez2playgame" style={{ background: "#f0f3f4" }}>
                    <div class="modal-header mechanicsmodalheader">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="col-md-12">
                        <div className="px-3 d-flex justify-content-around align-items-center">
                            <div className="col-md-6 d-flex px-5 justify-content-end" style={{ marginRight: "-76px" }}>
                                <img className="icon" src={s3Icon} alt="" />
                            </div>
                            <div className="col-md-6 px-2 d-flex m-0">
                                <h1 className="iconlabel">Suertres <span style={{ color: "#f36e23" }}>Lotto</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <form>
                            <div className="form-content px-5">
                                <div className="step1 mx-5 py-4">
                                    <label style={{ fontWeight: "600" }} for="datetime">Choose <span style={{ color: "#f36e23" }}>Draw Date</span></label>
                                    <div className="row shadow py-4 border-1 rectangle" id="datetime" style={{ border: "1px solid #262626", borderRadius: ".25rem" }}>
                                        <div className="col-md-6">
                                            <div className="form-group px-5">
                                                {/* SELECT MENU HERE */}

                                                <select class="form-select drawdate" id="drawdate" aria-label="select" defaultValue="def" onChange={(e) => { changeShiftAccordingtoDate(e.target.value) }}>
                                                    {chooseDatesDropDown()}
                                                </select>
                                                {/* ======================= */}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group px-5">
                                                {/* SELECT MENU HERE */}
                                                <select class="form-select drawtime" id="drawtime" aria-label="select" defaultValue="def" onChange={(e) => { console.log(e.target.value) }}>
                                                    {chooseShiftTimeDropDown()}
                                                </select>
                                                {/* ======================= */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="step2 mx-5 py-4">
                                    <label style={{ fontWeight: "600" }} for="combination">Choose <span style={{ color: "#f36e23" }}>Combination</span></label>
                                    <div className="row shadow py-4 border-1 rectangle" id="combination" style={{ border: "1px solid #262626", borderRadius: ".25rem" }}>
                                        <div className="col-md-12">
                                            <div className="form-group px-5">
                                                <div className="col-md-12 pt-4">
                                                    {/* PIN LOCATION HERE */}
                                                    <div className="btn-toolbar numpad">
                                                        <div style={{ display: "flex" }}>
                                                            <div style={{ width: "338px", display: "flex" }}>
                                                                {CombinationPin()}
                                                            </div>
                                                            <div style={{ display: "flex", width: "134px", justifyContent: "center", alignContent: "center", flexWrap: "wrap" }}>
                                                                <BackspaceIcon
                                                                    fontSize="large"
                                                                    cursor="pointer"
                                                                    onClick={removeCombo}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>1</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>2</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>3</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>4</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>5</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>6</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>7</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>8</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>9</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>10</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>11</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>12</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>13</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>14</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>15</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>16</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>17</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>18</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>19</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>20</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>21</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>22</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>23</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>24</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>25</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>26</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>27</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>28</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>29</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>30</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>31</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>32</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>33</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>34</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>35</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4 pb-3">
                                            <div className="btn-toolbar numpad">
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>36</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>37</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>38</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>39</button>
                                                <button type="button" class="btn mx-5 btn-default btn-circle btn-xl" onClick={(e) => { SetupComboPin(e.currentTarget.childNodes[0].textContent); }}>40</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="step3 mx-5 py-4">
                                    <label style={{ fontWeight: "600" }} for="combination">Choose <span style={{ color: "#f36e23" }}>Amount</span></label>
                                    <div className="row shadow py-4 border-1 rectangle" id="combination" style={{ border: "1px solid #262626", borderRadius: ".25rem" }}>
                                        <div className="col-md-12">
                                            <div className="form-group px-5">

                                                <div className="btn-toolbar numpad">
                                                    {betInputPin()}
                                                </div>
                                                {/* <PinInput
                                                    length={2}
                                                    initialValue=""
                                                    onChange={(value, index) => { }}
                                                    type="numeric"
                                                    inputMode="number"
                                                    style={{ padding: '10px', textAlign: 'center' }}
                                                    inputStyle={{ background: '#c6c7c9', border: 'none' }}
                                                    inputFocusStyle={{ border: '1px solid #f36e23', background: 'white' }}
                                                    onComplete={(value, index) => { }}
                                                    autoSelect={true}
                                                /> */}
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4">
                                            <div className="btn-toolbar amount">
                                                <button type="button" class="btn mx-5 btnamount" onClick={(e) => { SetupBetInput(e.currentTarget.childNodes[0].textContent); }}>5</button>
                                                <button type="button" class="btn mx-5 btnamount" onClick={(e) => { SetupBetInput(e.currentTarget.childNodes[0].textContent); }}>10</button>
                                                <button type="button" class="btn mx-5 btnamount" onClick={(e) => { SetupBetInput(e.currentTarget.childNodes[0].textContent); }}>20</button>
                                                <button type="button" class="btn mx-5 btnamount" onClick={(e) => { SetupBetInput(e.currentTarget.childNodes[0].textContent); }}>50</button>
                                                <button type="button" class="btn mx-5 btnamount" onClick={(e) => { SetupBetInput(e.currentTarget.childNodes[0].textContent); }}>100</button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pb-3 pt-5 px-5">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInput" placeholder="09XXXXXXXXX" value={user} onChange={(e) => { onChangeBettor(e.target.value); console.log(bettor) }} />
                                                <label for="floatingInput">Enter Bettor's UserID / Mobile Number (Optional)</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-4 px-5">
                                            <div class="d-grid gap-2 col-6 mx-auto">

                                                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#betModal" onClick={generateTicket}>BET</button>

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

        {/* 4DG - GAME */}
        {/* ========== */}

        {/* ================== BET MODAL ============== */}
        <div class="modal fade" id="betModal" tabindex="-1" aria-labelledby="" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header betmodalheader">
                        <h5 class="modal-title" id="betModalLabel">Selected<span style={{ color: "#f36e23" }}> Combination</span></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-5">
                        {generateTicketUI()}
                        <div className="col-md-12 pt-5">
                            <div className="btn-toolbar amount">
                                <button type="button" data-bs-dismiss="modal" class="btn mx-2 btnAddMore">ADD MORE</button>
                                <button type="button" class="btn mx-2 btnCheckout" data-bs-toggle="modal" data-bs-target="#receipt" onClick={generateTicketReceipt}>CHECKOUT</button>
                                <button type="button" class="btn mx-2 btnRemove">REMOVE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ============= */}

        {/* ============================================ */}

        <div class="modal fade" id="receipt" tabindex="-1" aria-labelledby="" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header" style={{ borderBottom: "0px" }}>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-5 col-md-12 d-flex">
                        <div className="col-md-5">
                            <h1>Your bet has<br></br>been <span style={{ color: "#f36e23" }}>submitted.</span></h1>
                            <div className="btn-toolbar btnReceipts">
                                <button type="button" class="px-3 py-1 btnDownload">DOWNLOAD TICKET</button>
                                <button type="button" class="px-3 py-1 mx-2 btnHome" onClick={handleHomeClick}>BACK TO HOME</button>
                            </div>
                        </div>
                        <div className="col-md-7 px-5 receiptcolumn" style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                            <div class="table">
                                <table class="table table-invoice" style={{ background: "transparent" }}>
                                    <thead>
                                        <tr>
                                            <th class="receipthead"></th>
                                            <th class="text-center receipthead"></th>
                                            <th class="text-center receipthead"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {generateTicketForReceipt()}
                                        {generateReceiptTotalAmount()}
                                        {/* <tr style={{ textAlign: "right" }}>
                                            <td colspan="4" class="pt-3" style={{ paddingRight: "38px" }}>
                                                <span class="text-inverse">Total Amount</span><br></br>
                                                <b class="databold"><span class="text-inverse">25.00</span></b>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}




export default HomepageContent


