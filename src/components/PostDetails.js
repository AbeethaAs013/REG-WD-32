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
    if (this.props.match && this.props.match.params.id){
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
  }
  render(){
    const{employeeID,productID,productname,date,qty,price,producttype,discrption} = this.state.post;
    return (
      <div style={{marginTop:'20px'}}>
      <h4>{employeeID}</h4>
      <hr/>

        <d1 className="row">
        <dt className="col-sm-3">Product ID</dt>
        <dd className="col-sm-9">{productID}</dd>

        <dt className="col-sm-3">Product Name</dt>
        <dd className="col-sm-9">{productname}</dd>

        <dt className="col-sm-3">Date</dt>
        <dd className="col-sm-9">{date}</dd>

        <dt className="col-sm-3">Quantitiy</dt>
        <dd className="col-sm-9">{qty}</dd>

        <dt className="col-sm-3">Price</dt>
        <dd className="col-sm-9">{price}</dd>

        <dt className="col-sm-3">Product Type</dt>
        <dd className="col-sm-9">{producttype}</dd>

        <dt className="col-sm-3">Discription</dt>
        <dd className="col-sm-9">{discrption}</dd>



      </d1>
 
      </div>  
      
    )
  }
}