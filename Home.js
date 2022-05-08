import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home.1';
 
import ReactToPrint from 'react-to-print';


export default class Print extends Component{
  render(){
    return(
      <div>
        <ReactToPrint


            trigger={() =>     <button className="btn1" style={{color:'blue'}} type="submit" onClick={this.generateReport}>
            <i class="fas fa-file-download" style={{fontSize:"20px"}}></i> print table data</button>}
            content = {()=>this.componentReff}
        />
      <Home ref={(el2)=>(this.componentReff=el2)} />
     </div>
   )
  }
}
    
  