require('dotenv').config();
// importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const port = 3000;

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({ extended: true }));

// using routes
app.use('/products', require('./routes/products'));

// starting the server
app.listen(port, function(err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`server is running on port: ${port}`);
});