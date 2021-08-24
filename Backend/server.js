const express = require('express');
const routesHandler = require('./routes/handler.js');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use('/', routesHandler);



const PORT = 4000; // backend routing port
app.listen(PORT, () => {
    console.log('Server started at http://localhost:' + PORT);
});