const express = require('express');
const routesHandler = require('./routes/handler.js');
const draw = require('./Draw');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use('/', routesHandler);



const PORT = 4000; // backend routing port
app.listen(PORT, () => {
    var x = draw.GenerateRandomNumbers(3,1,40); // with this we can store it as a string in the database and we can parse it back to check combinations
    var y = x.split(',').map(Number);
console.log(x + " "+ typeof(x));
console.log(y[0] +y[1] + " "+ typeof(y[0]));
    console.log('Server started at http://localhost:' + PORT);
});