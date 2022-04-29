const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
 },

    phone : {
    type : String,
    required : true
},
 

    
    date : {
     type : Date,
     required : true
 },

    vnumber : {
     type : String,
     required : true
 },

    province : {

    type : String,
    required : true

 },

    NIC : {

    type : String,
    required : true

 }

    
    
    
});


//module

module.exports=mongoose.model('Posts',postSchema);