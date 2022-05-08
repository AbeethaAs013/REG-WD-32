import React, { Component } from 'react'

export default class NavBar extends Component{
    render(){
        return(

        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">

   
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/add">View All Pickups Details</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Add New Pickup Details</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/edit/:id">Update Pickup details</a>
        </li>
       
      </ul>
     
    </div>
  
</nav>
        )
    }
}