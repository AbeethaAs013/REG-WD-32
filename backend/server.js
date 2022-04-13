const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");



const app = express();

//import routes
const postRoutes =require('./routes/posts');


//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);


//declare the sever port

const PORT = 8000;

//DB connection
const DB_URL="mongodb+srv://pavi:0006@cluster0.sygep.mongodb.net/REG_WD_32?retryWrites=true&w=majority";

mongoose.connect(DB_URL)
.then (()=>{
    console.log("DB connection succesfull");

})
.catch((err)=> console.log("DB connection error",err));


app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);

})
