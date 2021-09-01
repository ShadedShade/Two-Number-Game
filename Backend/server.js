const express = require('express');
const routesHandler = require('./routes/handler.js');
const draw = require('./Draw');
const helper = require('./helpers/helper');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

var mysql = require('mysql2');
var db = mysql.createConnection(
    {
        host: 'localhost',    // Please change 
        port:'3307',
        user: 'toor',
               // if you will test Database connection
        password: 'Ron192000' // according to your Mysql settings/ configurations
    }
);




app.use('/', routesHandler);

function CreateTicketControl(date,time,user)
{
    let control = date+time+user;
    let hash = Buffer.from(control).toString('base64');
    console.log(hash + " " + hash.length);
}

function TestQuery()
{
    db.query("Select  gametype.gamename,gametype.gameid, draw.DrawDate From numbers.gametype inner JOIN numbers.draw on draw.gameid = gametype.gameid group by draw.gameid",(err,result) =>
    {
        if(err)
        {
            console.log({err:err});
        }
        if(result.length >0)
        {
            let obj = helper.ParseToObject(result); // for testing only // use stringify to send to front
            console.log(obj);  // access object key value pair
        }
    })
}






const PORT = 4000; // backend routing port
app.listen(PORT, () => {
    var x = draw.GenerateRandomNumbers(3,1,40); // with this we can store it as a string in the database and we can parse it back to check combinations
    var y = x.split(',').map(Number);
console.log(x + " "+ typeof(x));
console.log(y[0] +y[1] + " "+ typeof(y[0]));
CreateTicketControl('2021-08;26','10:00:00','3922331144');


TestQuery();
    console.log('Server started at http://localhost:' + PORT);

});

// QUERIES
// REGISTER / LOGIN
// So for the register we need to INSERT Query to the profile the Mobile No and MPIn other info is optional
// For Login we need to query All info Where Username and MPIN is matched else we throw error message

// For the Transaction we need a reference of the User who will transact (Probably the UserID is stored in the frontend and can be accessed by a variable???)
// Depending on the method on what will happen to the users Money (Query the transaction Type)
// Record it to the Ledger ( INSERT into the ledger table) Then
// Update Profile Record (UPDATE PROFILE WHERE...)   NOTE: this two method can be stored in a Stored Procedure or just Use a trigger when something is updated in the Ledger

// The Game Draw, Creating Draw Times is controlled by the server, the client can only see what is the next draw dates/time and what game it is
// We can Query from the Draw TABLE All DrawID where the date is now or the future 

// The client can select what game to bet select the draw date/ shift time SELECT Game, sort it by date/ time
// The mechanics is stored in the server code, but all inputs are done in the front
// After the player place a bet/s the server will send a receipt of what the player Bet 
// This is probably a stored proc, What I am thinking is after all inputs are done by the user
// first the bet/s are placed in the BETS TABLE (INSERT STATEMENT to BETS) then since one bet is one ticket the BET ID will also be the Ticket ID (UPDATE/INSERT??) this will include a ticket control number that will be used in the receipt,
// the ticket control is the main ID of the Receipt which will be inserted to the db (INSERT to RECEIPT TABLE) which contains the total amount and other stuff

//For the results, once a draw is made, meaning this time and date what is the draw ID with the same date and time OR in the server this is queued and will just check the ID and execute necessary function
// for this we can just button press to simulate the next draw 
// after a draw is made, query all bets that has bets on this draw (Select from Bets where DrawID...), for all bets with the right combination or some numbers match, put (INSERT INTO) it in the Result table with it's matching prize 