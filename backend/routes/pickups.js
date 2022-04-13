const { required } = require("nodemon/lib/config");
const { update } = require("../models/pickup");

const router = require("express").Router();
let Pickup = require("../models/pickup")

http://localhost:8070/pickup/add

router.route("/add").post((req,res)=>{

const name = req.body.name;
const date = Date(req.body.date);
const vnumber = req.body.vnumber;
const province = req.body.province;
const NIC = req.body.NIC;

const newPickup = new Pickup({

   name,
   date,
   vnumber,
   province,
   NIC 

})

newPickup.save().then(()=>{
    res.json("Pickup Added")
}).catch((err)=>{
    console.log(err);
})

})

http://localhost:8070/pickup

router.route("/").get((req,res)=>{

Pickup.find().then((pickups)=>{
    res.json(pickups)

}).catch((err)=>{
    console.log(err);
})
})

http://localhost:8070/pickup/update

router.route("/update/:pickid").put(async(req,res)=>{
    let userId = req.params.pickid;
    const {name,date,vnumber,province,NIC} =req.body;

    const updatePickup = {

        name,
        date,
        vnumber,
        province,
        NIC 
     }

const update = await Pickup.findByIdAndUpdate(userId,updatePickup).then(()=>{

res.status(200).send({status: "User updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status: "Error with updating data",error: err.message});

})
})

router.route("/delete/:pickid").delete(async (req,res)=>{
 
    let userId = req.params.pickid;

    await Pickup.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "User deleted"}); 
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error: err.message});
    })
})

router.route("/get/:pickid").get(async (req,res) =>{
    let userId = req.params.pickid;
   const user= await Pickup.findById(userId).then((pickup)=>{
       
        res.status(200).send({status: "User fetched", pickup}); 
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
})
})

module.exports = router;

