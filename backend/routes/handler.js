const express = require('express');
const router = express.Router();

router.get('/tweets',(req,res)=> {
    // Sample get Data, this will be dynamic and will connect to a database
    const str = [{
            "name": "Codr Kai"
        },
        {"name": "Codr two"}
    ];
    res.end(JSON.stringify(str));
    console.log("Sending tweets...");
});
router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;