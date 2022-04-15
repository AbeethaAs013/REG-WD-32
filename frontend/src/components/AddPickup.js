import React,{useState} from "react"
import axios from "axios"
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

    console.log(newPickup);

     }

return(


<div className= "container">

<form onSubmit={sendData}>
  <fieldset enabled>
    <legend>Add Your Pickup Deatails Here</legend>
    <div className="mb-3">
      <label for="name" class="form-label">Buyer Name :</label>
      <input type="text" id="name" class="form-control" placeholder="Enter Your Name Here" onChange={(e)=>{

          setName(e.target.value);
      }}></input>
    </div>

    <div className="mb-3">
      <label for="date" class="form-label">Pickup Date :</label>
      <input type="date" id="date" class="form-control" placeholder="Enter Date Here" onChange={(e)=>{

setDate(e.target.value);
}}></input>
    </div>

    <div className="mb-3">
      <label for="vnumber" class="form-label">Vehicle No :</label>
      <input type="text" id="vnumber" class="form-control" placeholder="Enter Vehecle No Here"  onChange={(e)=>{

setVnumber(e.target.value);

      }}></input>
    </div>

    <div className="mb-3">
      <label for="province" class="form-label">Province :</label>
      <input type="text" id="province" class="form-control" placeholder="Enter Province Here" onChange={(e)=>{

setProvince(e.target.value);
}}></input>
    </div>

    <div className="mb-3">
      <label for="NIC" class="form-label">NIC No :</label>
      <input type="text" id="NIC" class="form-control" placeholder="Enter NIC No Here" onChange={(e)=>{

setNIC(e.target.value);
}}></input>
    </div>
    
    

    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>






</div>











)

}
