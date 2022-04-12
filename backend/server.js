const express = require("express");  // variable declaration 
const mongoose = require("mongoose");
const bodyParser = require("body-parser");  
const cors = require( "cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

//server connection

const PORT = process.env.PORT || 8070; // port when running in the computer , ||  logical OR

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; // DB connection

mongoose.connect(URL, {
//useCreateIndex : true,
//useNewUrlParser : true,
useUnifiedTopology: true,
//useFindAndModify : false

})

// connection
const connection = mongoose.connection;
connection.once("open",()=> {   // arrow functions in JS (readbility)
console.log("Mongodb Connection Success");

})
app.listen(PORT, () => console.log(`server running on port ${PORT}`));

