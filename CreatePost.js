import React,{ Component } from 'react';
import axios from 'axios';
export default class CreatePost extends Component{

  constructor(props){
    super(props);
    this.state={
      name:"",
      phone:"",
      date:"",
      vnumber:"",
      province:"",
      NIC:"",
     
    }
  }

  handleInputChange =(e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const{name,phone,date,vnumber,province,NIC} = this.state;

    const data={
      name:name,
      phone:phone,
      date:date,
      vnumber:vnumber,
      province:province,
      NIC:NIC,
      
    
    }
    console.log(data)

    axios.post("/post/save",data).then((res)=>{
      if(res.data.success){
        this.setState(
        {

        
          name:"",
          phone:"",
          date:"",
          vnumber:"",
          province:"",
          NIC:"",
  
        }

        )

        e.preventDefault();
        this.props.history.push(`/find/${name}`);
    }
}).catch(()=>{

  // toast.warning('Required',{position:toast.POSITION.TOP_CENTER})
  alert("Required to fill all fields")
      
    })

    
  }





  render(){
    return (
      <div className="col-md-8 mt-4 mx-auto"   >
        <h1 className="h3 mb-3 font-weight-normal">Add Your Pickup Details Here</h1>
        <form  className="needs-validation" noValidate  >

        
          <div className="form-group"style={{marginBottom:'15px' }}>
            <label style={{marginBotom:'5px'}}>Buyer Name :</label>
            <input type="text" 
            className="form-control"
            name="name"
            placeholder="Enter Your Name"
            value={this.state.name}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group"style={{marginBottom:'15px'}}>
            <label style={{marginBotom:'5px'}}>Contact Number :</label>
            <input type="text"  
            className="form-control"
            name="phone"
            placeholder="Enter Contact"
            value={this.state.phone}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group"style={{marginBottom:'15px'}}>
            <label style={{marginBotom:'5px'}}>Pickup Date :</label>
            <input type="date"
            className="form-control"
            name="date"
            placeholder="Enter date"
            value={this.state.date}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group"style={{marginBottom:'15px'}}>
            <label style={{marginBotom:'5px'}}>Vehicle Number :</label>
            <input type="text"
            className="form-control"
            name="vnumber"
            placeholder="Enter Vehicle No"
            value={this.state.vnumber}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group"style={{marginBottom:'15px'}}>
            <label style={{marginBotom:'5px'}}>Province :</label>
            <input type="text"
            className="form-control"
            name="province"
            placeholder="Enter Province"
            value={this.state.province}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group"style={{marginBottom:'15px'}}>
            <label style={{marginBotom:'5px'}}>NIC No :</label>
            <input type="text"
            className="form-control"
            name="NIC"
            placeholder="Enter NIC No"
            value={this.state.NIC}
            onChange={this.handleInputChange}/>
          </div>

         
          
          <button className="btn btn-primary" type="submit" style={{marginTop:'15px'}}onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp;
         Click To Add
          </button>


          &nbsp;
          &nbsp;

          <a href="/add">

          <button className="btn btn-primary" type="button" style={{marginTop:'15px'}}>
            <i className="far fa-check-square"></i>
            &nbsp;
         Click To View
          </button>
          </a>


        </form>
      </div>
      
       
      
    )
  }
}