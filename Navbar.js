import React, { Component } from 'react'
export default class Navbar extends Component{
    render(){
        return(

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="">Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/post/:id">View Product Details</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/add">Add New Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/edit/:id">Update Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">View Product Details Table</a>
        </li>
      </ul>
       
    </div>
  
</nav>
        )
    }
}