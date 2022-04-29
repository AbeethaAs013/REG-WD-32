import React,{ Component } from 'react';
import axios from 'axios';
export default class CreatePost extends Component{

  constructor(props){
    super(props);
    this.state={
      employeeID:"",
      productID:"",
      productname:"",
      producttype:"",
      date:"",
      qty:"",
      price:"",
      discrption:""

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
    const{employeeID,productID,productname,producttype,date,qty,price,discrption} = this.state;

    const data={
      employeeID:employeeID,
      productID:productID,
      productname:productname,
      producttype:producttype,
      date:date,
      qty:qty,
      price:price,
      discrption:discrption
    }
    console.log(data)

    axios.post("/post/save",data).then((res)=>{
      if(res.data.success){
        this.setState(
        {

        
        employeeID:"",
        productID:"",
        productname:"",
        producttype:"",
        date:"",
        qty:"",
        price:"",
        discrption:""
  
        }

        )
      }
    })

    
  }
  render(){
    return (
      
      <div className="col-md-8 mt-4 mx-auto">

        <h1  className="h3 mb-3 font-weight-normal">Add New Products</h1>
        

        <form className="needs-validation" noValidate>


             
          <div className="form-group"style={{marginBottom:'15px'}} >
            <label style={{marginBotom:'5px'}}>Employee ID</label>
            <input type="text"
            className="form-control"
            name="employeeID"
            placeholder="enter a valid ID"
            value={this.state.employeeID}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group"style={{marginBottom:'15px'}}>
            <label style={{marginBotom:'5px'}}>Product ID</label>
            <input type="text"
            className="form-control"
            name="productID"
            placeholder="enter the product ID"
            value={this.state.productID}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group"style={{marginBottom:'15px'}}>
            <label style={{marginBotom:'5px'}}>product Name</label>
            <input type="text"
            className="form-control"
            name="productname"
            placeholder="enter the product name"
            value={this.state.productname}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group"style={{marginBottom:'15px'}}>
            <label style={{marginBotom:'5px'}}>Product Type</label>
            <input type="text"
            className="form-control"
            name="producttype"
            placeholder="enter the product type"
            value={this.state.producttype}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group"style={{marginBottom:'15px'}}>
            <label style={{marginBotom:'5px'}}>Date</label>
            <input type="date"
            className="form-control"
            name="date"
            placeholder="enter todays date"
            value={this.state.date}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group"style={{marginBottom:'15px'}}>
            <label style={{marginBotom:'5px'}}>Quantity</label>
            <input type="text"
            className="form-control"
            name="qty"
            placeholder="enter the quantity"
            value={this.state.qty}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group"style={{marginBottom:'15px'}}>
            <label style={{marginBotom:'5px'}}>Price</label>
            <input type="text"
            className="form-control"
            name="price"
            placeholder="price"
            value={this.state.price}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group"style={{marginBottom:'15px'}}>
            <label style={{marginBotom:'5px'}}>Discription</label>
            <input type="text"
            className="form-control"
            name="discrption"
            placeholder="discrption"
            value={this.state.discrption}
            onChange={this.handleInputChange}/>
          </div>
        
          
          <button className="btn btn-primary" type="submit" style={{marginTop:'15px'}}onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp;
         Add Products
          </button>
          &nbsp; &nbsp;
          <a href="/">



     <button className="btn btn-primary" type="button" style={{marginTop:'15px'}}>

     <i className="far fa-check-square"></i>

     


     View Product 

     </button>

     </a>

        </form>
      </div>
      
       
      
    )
  }
}