const express = require('express');
const router = express.Router();
const connection = require('../configs/database.js');
var mysql = require('mysql');

var db = mysql.createConnection(
    {
        host: 'localhost',    // Please change 
        user: 'root',         // if you will test Database connection
        password: 'Ron192000' // according to your Mysql settings/ configurations
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