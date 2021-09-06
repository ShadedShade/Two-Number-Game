import React, { useState } from "react";
import Axios from 'axios';
function Test() {
    const [userID, setUserID] = useState('');
    const [bettor, setBettor] = useState('');
    const [userCombo, setCombo] = useState('');
    const [drawID, setDrawID] = useState('');
    const [betDetails, setBetsDetails] = useState('');
    const [amount, setAmount] = useState('');
    const [game, setGameid] = useState('');

    const StringifyData = () =>
    {
    //let betsDetails = [{"DrawID":"drawid","Combo":"combo","Bettor":"bettor","BetAmount":"betamount"}];  //<----  From Input this should be the contents from the Front
     // 
        let bet = bettor??userID;
        let data = [{"DrawID":drawID,"Combo":userCombo,"Bettor":bet,"BetAmount":amount}];        
        setBetsDetails(data);
        let sendData = JSON.stringify({"bets":data,"userid":userID,"drawid":drawID,"gameid":game})
        Axios.post('http://localhost:3000/placeBets',{bets:JSON.stringify(data),userid:userID,drawid:drawID,gameid:game
    }).then(function(response){
        console.log(response);
    }).catch(function(error)
    {
        console.log(error);
    })

    }
    return (
            <div class="form-signin">
                <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 class="h3 mb-3 font-weight-normal">Register</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input  id="Text" class="form-control" placeholder="User ID" required="" autofocus="" onChange={(e) => { setUserID(e.target.value) }} />
                <input  id="Text" class="form-control" placeholder="Bettor" required="" autofocus="" onChange={(e) => { setBettor(e.target.value) }} />
                <input  id="Text" class="form-control" placeholder="Combo" required="" autofocus="" onChange={(e) => { setCombo(e.target.value) }} />
                <input  id="Text" class="form-control" placeholder="Bet AMount" required="" autofocus="" onChange={(e) => { setAmount(e.target.value) }} />
                <input  id="Text" class="form-control" placeholder="Draw ID" required="" autofocus="" onChange={(e) => { setDrawID(e.target.value) }} />
                <input  id="Text" class="form-control" placeholder="Game ID" required="" autofocus="" onChange={(e) => { setGameid(e.target.value) }} />
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" onClick={StringifyData}>Sign in</button>
                <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
            </div>
    );
}
export default Test;