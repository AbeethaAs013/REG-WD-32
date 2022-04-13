const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const Schema = mongoose.Schema;

const pickupSchema = new Schema({

    name : {
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


})

const Pickup = mongoose.model("Pickup",pickupSchema);

module.exports = Pickup;
