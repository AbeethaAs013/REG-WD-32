import React,{ Component } from 'react';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
export default class EditPost extends Component{

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
    if (this.props.match && this.props.match.params.id){
    const id = this.props.match.params.id;
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

    axios.put(`/post/update/${id}`,data).then((res)=>{
      if(res.data.success){

        alert("Product Details Updated")
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
}
  componentDidMount(){
    if (this.props.match && this.props.match.params.id){
    const id = this.props.match.params.id;
    axios.get(`/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
         
          employeeID:res.data.post.employeeID,
          productID:res.data.post.productID,
          productname:res.data.post.productname,
          producttype:res.data.post.producttype,
          date:res.data.post.date,
          qty:res.data.post.qty,
          price:res.data.post.price,
          discrption:res.data.post.discrption

        });
        console.log(this.state.post);

      }    
    });
  }
}
  
  render(){
    return (
      
      <div className='p'> 
      <div className="col-md-8 mt-4 mx-auto">
        <h1 style={{backgroundColor:"#126EAC ",color: "white" ,padding: "10px",
        fontFamily: "Sans-Serif"}}className="h3 mb-3 font-weight-normal">Update Product Details</h1>
        <form className="needs-validation" noValidate>

          
          <div className="form-group"style={{marginBottom:'15px'}}>
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
         Update Products
          </button>

        </form>
      </div>
      
       </div>
      
    )
  }
}


 
      