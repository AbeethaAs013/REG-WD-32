const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    employeeID:{
        type:Number,
        required:true
    },
    productID:{
        type:Number,
        required:true
    },
    
    productname:{
        type:String,
        required:true
    },
    producttype:{
        type:String,
        required:true
    }, 
    date:{
        type:Date,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discrption:{
        type:String,
        required:true
    }
    
    
    
    
});


//module

module.exports=mongoose.model('Posts',postSchema);