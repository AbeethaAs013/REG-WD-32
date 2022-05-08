import React,{ Component } from 'react';
import axios from 'axios';
 
export default class EditPost extends Component{

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
    if (this.props.match && this.props.match.params.id){
      const id = this.props.match.params.id;
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

    axios.put(`/post/update/${id}`,data).then((res)=>{
      if(res.data.success){

        alert("Pickup Details Updated Sucessfully!")
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
      }
    })
  }
  }
  componentDidMount(){
    if (this.props.match && this.props.match.params.id){
    const id = this.props.match.params.id;
    axios.get(`/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          
          name:res.data.post.name,
          phone:res.data.post.phone,
          date:res.data.post.date,
          vnumber:res.data.post.vnumber,
          province:res.data.post.province,
          NIC:res.data.post.NIC,
         

        });
        console.log(this.state.post);

      }    
    });
  }
}
render(){
  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Handle Your Pickup Details Here</h1>
      <form className="needs-validation" noValidate>

        
        <div className="form-group"style={{marginBottom:'15px'}}>
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
          <label style={{marginBotom:'5px'}}> Pickup Date :</label>
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
         Click To Update 
          </button>

        </form>
      </div>
      
       
      
    )
  }
}
