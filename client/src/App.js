import React,{ Component } from 'react'
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };
  }

componentDidMount(){
  this.retrievePosts();
}


//retrieve
retrievePosts(){

  axios.get("http://localhost:8000/posts").then(res=>{
    
  if (res.data.success){
    this.setState({
      posts:res.data.existingPosts
    });
    console.log(this.state.posts)
  }


  });
}
  render(){
    return(
      <div>
       {this.state.posts.map(posts =>(
         <div>
        <p>{posts.employeeID}</p>
        <p>{posts.productID}</p>
        <p>{posts.productname}</p>
        <p>{posts.producttype}</p>  
        <p>{posts.date}</p>
        <p>{posts.qty}</p>
        <p>{posts.price}</p>
        <p>{posts.discrption}</p>

         </div>

       ))}
      </div>
    )
  }
}
