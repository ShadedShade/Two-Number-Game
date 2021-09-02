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

router.post('/register', (req, res) => {
    console.log("request accepted");
    const username = req.body.username;
    const password = req.body.password;
   db.query("INSERT INTO `numbers`.`profile` (mobile,mpin) VALUES (?,?)", [username, password],
        (err, result) => {
            console.log(err);
        });
});

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM `numbers`.`profile` WHERE mobile = ? AND mpin = ?", 
    [username, password],
        (err, result) => {
            if (err) { 
                res.send({ err: err });
             }

            if (result.length > 0) {
                res.send(result);
            }
            else {
                res.send({ message: "Invalid mobile no. / password" });
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



router.post('/userBets',(req,res)=>
{
    const userid = req.body.userid;
   // db.query("SELECT ")
}
)


// now in theory this should work
// we create bets, 
// router.post('placeBets',(req,res)=>
// {
//     const bets = req.body.bets; // this will be a list of bets
//     const userid = req.body.userid;
//     const drawid = req.body.drawid; // if one draw date and time
//     let betsDetails = [{"DrawID":"drawid","Combo":"combo","BetAmount":"betamount"}];  //<----  From Input

//     let betsObject = JSON.parse(bets);
    
//     let control = backendFunctions.CreateTicketControl(userid)
//     // Create a For Loop?
//     db.query("CALL `numbers`.`InsertBets`(<{IN drawid int}>, <{IN combo varchar(25)}>, <{IN bettor varchar(25)}>, <{IN amount float}>, <{IN ticketControl varchar(45)}>);")

// })

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