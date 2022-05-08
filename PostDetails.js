import React,{ Component } from 'react';
import axios from 'axios';
 

 
export default class PostDetails extends Component{
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }
  componentDidMount(){
     const id = this.props.match.params.id;
    axios.get(`/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      
      }    
    });
  }
  
  render(){
    const{name,phone,date,vnumber,province,NIC} = this.state.post;
    return (
      <div style={{marginTop:'20px'}}>
      <h4>{name}</h4>
      <hr/>

        <d1 className="row">
        <dt className="col-sm-3">Name</dt>
        <dd className="col-sm-9">{name}</dd>

        <dt className="col-sm-3">Contact Number</dt>
        <dd className="col-sm-9">{phone}</dd>

        <dt className="col-sm-3">Date</dt>
        <dd className="col-sm-9">{date}</dd>

        <dt className="col-sm-3">Vehicle Number</dt>
        <dd className="col-sm-9">{vnumber}</dd>

        <dt className="col-sm-3">Province</dt>
        <dd className="col-sm-9">{province}</dd>

        <dt className="col-sm-3">NIC</dt>
        <dd className="col-sm-9">{NIC}</dd>

        



      </d1>
 
      </div>  
      
    )
  }
}