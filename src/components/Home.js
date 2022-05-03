import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component{
constructor(props){
  super(props);
   

  this.state={
    posts:[]
  };

}

componentDidMount(){
  this.retrievePosts();
  
}

retrievePosts(){
  axios.get("/posts").then(res =>{
    if (res.data.success){
      this.setState({
        posts:res.data.existingPosts

      });

      console.log(this.state.posts)
    }

  });
}
onDelete = (id)=>{
  axios.delete(`/post/delete/${id}`).then((res)=>{
    alert("Product Delete Succecssfull");
    this.retrievePosts();

  })
}

render(){
  return(
   
    
       <div  className="container">
         <p><h3>All Product details</h3></p>
         <table class="table table-primary table-striped">
           <thead>
             <tr>
               <th scope="col">Invoice ID</th>
               <th scope="col">Employee ID</th>
               <th scope="col">Product ID</th>
               <th scope="col">Product Name</th>
               <th scope="col">Date</th>
               <th scope="col">Quntity</th>
               <th scope="col">Price</th>
               <th scope="col">Type</th>
               <th scope="col">Discription</th>
               <th scope="col">Update or Delete the Products</th>
               
             </tr>
           </thead>
           <tbody>

           {this.state.posts.map((posts,index) =>(
             <tr key={index}>

            <th scope="row">{index+1}</th>
            <td>
                <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                {posts.employeeID}
                </a>
            </td>
            <td>{posts.productID}</td>
            <td>{posts.productname}</td>
            <td>{posts.date}</td>
            <td>{posts.qty}</td>
            <td>{posts.price}</td>
            <td>{posts.producttype}</td>
            <td>{posts.discrption}</td>

            <td>
              <a className="btn btn-warning" href={`/edit/${posts._id}`}>
              <i className="fas fa-edit"></i>&nbsp;Update
              </a>
              &nbsp;
              &nbsp;
              &nbsp;
              <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                <i className="far fa-trash-alt"></i>&nbsp;Delete 
              </a>
            </td>
             </tr>
           ))}

           </tbody>
         </table>
         <a href="/add">
         <button type="button" className="btn btn-primary btn-lg mb-2 mr-3"> Add New Products</button>
        
         
         </a>
          

         </div>
     
  )
     }
    }
  