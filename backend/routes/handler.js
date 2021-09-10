const express = require('express');
const router = express.Router();
const connection = require('../configs/database.js');
var mysql = require('mysql2');
const { json } = require('body-parser');
const helper = require('../helpers/helper');
const backendFunctions = require('../serverfunctions/backendFunctions');

var db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'toor',
        password: 'Ron192000',
        port: 3307 // according to your Mysql settings/ configurations
    }
);
// routing to use for 
router.get('/home', (req, res) => {

    const nms = [{
        name: "Admin",
        stuff: "Landing Page"
    }];
    res.end(JSON.stringify(nms));
    // if this is used in the landing page
    // what data should be displayed?

});

// just throwing the error back to the front is enough
router.post('/register', (req, res) => {
    console.log("request accepted");
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const name = req.body.name;
   db.query("INSERT INTO `numbers`.`profile` (mobile,email,mpin,name) VALUES (?,?,?,?)", [username,email, password,name],
        (err, result) => {
            if(err)
            {
                console.log(err); // Go send an error message, alert in the front
                res.send({ message: "User Already exists" });

            }
            if(result)
            {
                res.send({response:"User Created"});
                console.log(result);
            }
        });
});

// Send Username 
router.post('/login', (req, res) => {
    const username = req.body.username;

    db.query("SELECT profile.mobile FROM `numbers`.`profile` WHERE mobile = ? ", 
    [username],
        (err, result) => {
            if (err) { 
                res.send({ err: err });
             }

            if (result.length > 0) {
                res.send(result);
            }
            else {
                res.send({ message: " User does not exist" });
            }

        });
})

router.post('/loginMpin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM `numbers`.`profile` WHERE mobile = ? AND mpin = ? ", 
    [username,password],
        (err, result) => {
            if (err) { 
                res.send({ err: err });
             }

            if (result.length > 0) {
                res.send(result);
            }
            else {
                res.send({ message: " User does not exist" });
            }

        });
})

router.post('/money', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT money FROM `numbers`.`profile` WHERE mobile = ? AND mpin = ? ", 
    [username,password],
        (err, result) => {
            if (err) { 
                res.send({ message: " An Error Occured" });

             }

            if (result.length > 0) {
                res.send(result);
            }
            else {
                res.send({ message: " User does not exist" });
            }

        });
})


 router.get('/games',(req,res)=>
{
    // request all games 
    db.query("SELECT * FROM numbers.gametype",(err,result) =>
    {
        if(err)
        {
            res.send({err:err});
        }
        if(result.length >0)
        {
            
            var data = JSON.stringify(result);
            res.send(data);
        }
    })

})


// GAME SELECTION
// UI no.4 
// BUTTON WILL POST GAMEID
router.get('/gameselect',(req,res)=>
{
    db.query("Select  gametype.gamename,gametype.gamename, draw.DrawDate From numbers.gametype inner JOIN numbers.draw on draw.gameid = gametype.gameid group by draw.gameid",(err,result) =>
    {
        console.log(result);
        if(err)
        {
            res.send({err:err});
        }
        if(result.length >0)
        {
            var data =JSON.stringify(result);
            res.send(data);
        }
        else
        {
            res.send(err);
        }
    })

})

// select Game ID 
// UI no. 4
router.post('/selected',(req,res)=>
{
    const gameid = req.body.gameid;

    db.query("SELECT draw.gameid, Draw.DrawDate, Draw.ShiftTime From numbers.draw WHERE gameid = ? order by draw.DrawDate"),[gameid],(err,result)=>
    {
        console.log(result);
        if(err)
        {
            res.send({err:err});
        }
        if(result.length >0)
        {
            var data =JSON.stringify(result);
            res.send(data);
        }
        else
        {
            res.send(err);
        }
    }
})


// Select userBet History
router.post('/userBets',(req,res)=>
{
    const userid = req.body.userid;
   db.query("Select receipt.receiptid, receiptdetails.ticketid,bets.combo, bets.BetAmount, draw.DrawDate, draw.ShiftTime from numbers.receipt inner join numbers.receiptdetails on receipt.receiptid = receiptdetails.receiptid inner join numbers.bets on receiptdetails.ticketid = bets.BetID inner join numbers.draw on draw.DrawID = bets.drawid Where UserID = '?';",[userid],
   (err,result)=>
   {
    console.log(result);
    if(err)
    {
        res.send({err:err});
    }
    if(result.length >0)
    {
        var data =JSON.stringify(result);
        res.send(data);
    }
    else
    {
        res.send(err);
    }
   }
   )
}
)


// now in theory this should work
// we create bets, 
router.post('/placeBets',(req,res)=>
{
    const bets = req.body.bets; // this will be a list of bets
    const userid = req.body.userid;
    const drawid = req.body.drawid; // if one draw date and time
    let betsDetails = [{"DrawID":"drawid","Combo":"combo","Bettor":"bettor","BetAmount":"betamount"}];  //<----  From Input this should be the contents from the Front
    const gameid =req.body.gameid;
    let betsObject = JSON.parse(bets);
   
   let control = backendFunctions.CreateTicketControl(userid) // NOTE HERE THAT TIME AND DATE IS IN A TIMESTAMP MEANING THAT THIS NEEDS TO BE CALLED ONCE SO EACH BET IS WITH THE SAME CONTROL
   // Create a For Loop?
   // Create a Receipt first
   // then create bets THEN Tickets
                                               // Receipt                      // User                     // randomSeq                //localhost             //localhost                 // gameid
   db.query("CALL `numbers`.`CreateBaseReceipt`(?, ?, ?, ?, ?,?)",
   [control,userid,+new Date,"localhost","localhost",gameid])
   // For Loop // BETS DETAILS                             // DrawID, Combo,Bettor(by default User), control
   db.query("CALL `numbers`.`InsertBets`(?, ?, ?, ?, ?)",[betsObject[0].DrawID,betsObject[0].Combo,betsObject[0].Bettor,betsObject[0].BetAmount,control],(err,result)=>
   {
       if(err)
       {
           console.log(err)
       }
       if(result)
       {
           console.log(result)
       }
   })
   // UPDATE TOTAL AMOUNT ON RECEIPT
   db.query("UPDATE `numbers`.`receipt` SET`totalamount` = (SELECT SUM(receiptdetails.betamount) FROM numbers.receiptdetails WHERE receiptdetails.receiptid = receipt.receiptid) WHERE receipt.receiptid = ?",[control])
   // UPDATE PLAYER'S Money
   db.query("UPDATE `numbers`.`profile` SET `money` = profile.money - (SELECT receipt.totalamount From numbers.receipt WHERE receipt.receiptid = ?) WHERE `mobile` =?",[control,userid])

})

// now we go to Betting, INSERT GAMEID DATE TIME, COMBINATION AND BET


// 

// get all current draws
// insert new draws
// update draws?
router.get('/draws',(req,res)=>
{
    db.query("SELECT * FROM numbers.draw",(err,result) =>
    {
        if(err)
        {
            res.send({err:err});
        }
        if(result.length >0)
        {
            var data = JSON.stringify(result);
            res.send(data);
        }
    })
})

// Insertation then Update Profile of User

router.post('/transaction',(req,res)=>
{

    console.log("request accepted");
    const username = req.body.username;
    const type = req.body.type;
    const method= req.body.method;
    const details = req.body.details; // might be server
    const amount = req.body.amount;
   db.query("CALL `numbers`.`update_ledger_and_profile_table`(?, ?, ?,?, ?);", [username, type,method,details,amount],
        (err, result) => {
            if(err)
            {
                console.log(err);
                res.send({message:"unknown error occured"});

            }

            if(result)
            {
                console.log(JSON.stringify(result));
                res.send(result);    

            }
        });})

router.post('results',(req,res)=>
{

})




// to test tommorow
// CALL numbers.CreateBaseReceipt(<{IN receiptID varchar(45)}>, <{IN userid varchar(13)}>, <{IN lineseq varchar(45)}>, <{IN agent varchar(45)}>, <{IN outlet varchar(45)}>, <{IN gameid varchar(25)}>);
// CALL numbers.InsertBets(5, '25-04', '+639922113388', 50,'MjAyMS0wOTswMjEwOjAwOjAwMzkyMjMzMTE0NA==');
// UPDATE numbers.receipt
// SETtotal amount = (SELECT SUM(receiptdetails.betamount) FROM numbers.receiptdetails WHERE receiptdetails.receiptid = receipt.receiptid) WHERE receipt.receiptid = ?;
// UPDATE numbers.profile
// SET
// money = numbers.money - (SELECT receipt.totalamount From numbers.receipt WHERE receipt.receiptid = ?) 
// WHERE mobile =?;







// insert a draw ("Server ONLY")















router.get('/tweets', (req, res) => {
    // Sample get Data, this will be dynamic and will connect to a database
    connection;
    const str = [{
        "name": "Codr Kai"
    },
    { "name": "Codr two" }
    ];
    res.end(JSON.stringify(str));
    console.log("Sending tweets...");
});
router.post('/addTweet', (req, res) => {
    res.end('NA');
});





module.exports = router;