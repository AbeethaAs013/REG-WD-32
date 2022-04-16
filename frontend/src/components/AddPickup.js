import React,{useState} from "react"
import axios from "axios";
export default function AddPickup(){

    const [name,setName] = useState("");
    const [date,setDate] = useState("");
    const [vnumber,setVnumber] = useState("");
    const [province,setProvince] = useState("");
    const [NIC,setNIC] = useState("");
    
    function sendData(e){
        e.preventDefault();
        
    const newPickup ={

        name,
        date,
        vnumber,
        province,
        NIC
    }

  axios.post("http://localhost:8070/pickup/add",newPickup).then(()=>{
    alert("pickup added")
  }).catch((err)=>{
    alert(err)

     })

    }

return(


<div className= "container">

<form onSubmit={sendData}>
 
    <legend>Add Your Pickup Deatails Here</legend>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Buyer Name :</label>
      <input type="text" id="name" className="form-control" placeholder="Enter Your Name Here" onChange={(e)=>{

          setName(e.target.value);
      }}></input>
    </div>

    <div className="mb-3">
      <label htmlFor="date" className="form-label">Pickup Date :</label>
      <input type="date" id="date" className="form-control" placeholder="Enter Date Here" onChange={(e)=>{

setDate(e.target.value);
}}></input>
    </div>

    <div className="mb-3">
      <label htmlFor="vnumber" className="form-label">Vehicle No :</label>
      <input type="text" id="vnumber" className="form-control" placeholder="Enter Vehecle No Here"  onChange={(e)=>{

setVnumber(e.target.value);

      }}></input>
    </div>

    <div className="mb-3">
      <label htmlFor="province" className="form-label">Province :</label>
      <input type="text" id="province" className="form-control" placeholder="Enter Province Here" onChange={(e)=>{

setProvince(e.target.value);
}}></input>
    </div>

    <div className="mb-3">
      <label htmlFor="NIC" className="form-label">NIC No :</label>
      <input type="text" id="NIC" className="form-control" placeholder="Enter NIC No Here" onChange={(e)=>{

setNIC(e.target.value);
}}></input>
    </div>
    
    

    <button type="submit" className="btn btn-primary">Submit</button>
  
</form>






</div>











)

    }
