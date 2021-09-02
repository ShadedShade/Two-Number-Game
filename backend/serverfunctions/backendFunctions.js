const express = require('express');
const router = express.Router();
const connection = require('../configs/database.js');
const mysql = require('mysql2');


var db = mysql.createConnection(
    {
        host: 'localhost',    // Please change 
        user: 'root',         // if you will test Database connection
        password: 'Ron192000' // according to your Mysql settings/ configurations
    }
);

function InsertDraw(date,time,combo,gameID){
    db.query("INSERT INTO `numbers`.`draw`(`DrawDate`,`ShiftTime`,`DrawCombo`,`gameid`)VALUES(?,?,?,?)",[date,time,combo,gameID],(err,result)=>
    {
        if(err)
        {
            console.log("Failed to insert Draw");
            return;
        }
        if(result)
        {
            let data = JSON.stringify(result);
            console.log("Inserted new Draw "+ data[0]['date']) // is this right? xd
        }
    })
}

function CreateTicketControl(date,time,user)
{
    let control = date+time+user;
    let hash = Buffer.from(control).toString('base64');
    console.log(hash + " " + hash.length);
}

// make a function that will multiply the bet to the result score
function MatchEZTwoResult( result,userBet)
{
    let res = result.split("-");
    if(res[0] == res[1] && res[0] == userBet[0] &&res[1] == userBet[1])
    {
        return 500;
    }
    // straight
    if(res[0] == userBet[0] &&res[1] == userBet[1] )
    {
        return 300;
    }
    //rumble
    if(res[0] == userBet[1] &&res[1] == userBet[0] )
    {
        return 100;
    }

    
    // Consolation, please check if logic is right
    for(let i = 0; i<userBet.length;i++)
     for(let j = 0; j<userBet.length;j++)
     {
            if(userBet[i] == res[j])
            return 10;
     }
}

module.exports = {CreateTicketControl,MatchEZTwoResult,InsertDraw}
