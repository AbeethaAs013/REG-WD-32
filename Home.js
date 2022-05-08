import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import { saveAs } from 'file-saver';
import ReactToPrint from 'react-to-print';

export  class Home extends Component{
constructor(props){
  super(props);
  this.generateReport = this.generateReport.bind(this);


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
    alert("Pickup Details Delete Succecssfull!");
    this.retrievePosts();
  })
}

async generateReport() {
  const obj = { posts: this.state.posts }
  await axios.post('/pickupreport/generatepickupreport', obj, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, }).then((res) => {
      //alert('Report Generated')
      toast.success('Report Generated Successfully', { position: toast.POSITION.TOP_CENTER })
      console.log(res)
      console.log(res.data)



      const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlog, 'invoice.pdf');

      //window.open(res.data, '_blank');

  }).catch((err) => {
      console.log(err.message)
  })
  console.log(obj)
}





filterData(posts,searchkey){
  const result = posts.filter((post) =>
  post.vnumber.includes(searchkey)
  )

  this.setState({posts:result})
}

handleSearchArea =(e)=>{
 const searchkey= e.currentTarget.value;
 axios.get("/posts").then(res =>{
  if (res.data.success){

    this.filterData(res.data.existingPosts,searchkey)
     
  }

});

}

render(){
  return(
    
   
    
       <div  className="container">
       
         
           <center>
        <h4> All Pickup details</h4>
         </center>

         <div className="col-lg-3 mt-2 mb-2">
           <input
           className="form-control"
           type="Search"
           placeholder="Search"
           name="SearchQuery"
           onChange={this.handleSearchArea}>

           </input>
           </div> 
         <table className="table table-dark table-hover" >

           
           <thead>
          
             <tr>
            
               <th scope="col">ID</th>
               <th scope="col">Name</th>
               <th scope="col">Contact Number</th>
               <th scope="col">Date</th>
               <th scope="col">Vehicle Number</th>
               <th scope="col">Province</th>
               <th scope="col">NIC</th>
               <th scope="col">Action</th>
               
             </tr>
           </thead>
           <tbody>

           {this.state.posts.map((posts,index) =>(
             <tr key={index}>

            <th scope="row">{index+1}</th>
            <td>
                <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                {posts.name}
                </a>
            </td>
           
           
            <td>{posts.phone}</td>
            <td>{posts.date}</td>
            <td>{posts.vnumber}</td>
            <td>{posts.province}</td>
            <td>{posts.NIC}</td>

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
        
       
         </div>



     
  )
     }
     }
    
     export default class Print extends Component{
      render(){
        return(
          <div>
            <ReactToPrint 
                trigger={() => <button className="generateReport1" type="button"><i class="fas fa-redo pr-2" aria-hidden="true"></i> Generate Report
                               </button>}
                content = {()=>this.componentReff}
            />
          <Home ref={(el2)=>(this.componentReff=el2)} />
         </div>
       )
      }
    }