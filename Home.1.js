import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { toast } from 'react-toastify';
 
 


export default class Home extends Component {
  constructor(props) {
    super(props);


    this.state = {
      
      posts: []
    };

  }

  componentDidMount() {
    this.retrievePosts();

  }

  retrievePosts() {
    axios.get("/posts").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts);
      }

    });
  }
  onDelete = (id) => {
    axios.delete(`/post/delete/${id}`).then((res) => {
      alert("Product Delete Succecssfull");
      this.retrievePosts();

    });
  };



  filterData(posts, searchkey) {
    const result = posts.filter((post) => post.productname.includes(searchkey)
    );

    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;
    axios.get("/posts").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchkey);

      }



    });

  };
  async generateReport() {
    const obj = { posts: this.state.posts };
    await axios.post('/stockreport/generatestockreport', obj, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, }).then((res) => {

      //alert('Report Generated')
      toast.success('Report Generated Successfully', { position: toast.POSITION.TOP_CENTER });
      console.log(res);
      console.log(res.data);

      const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlog, 'stock.pdf');

      //window.open(res.data, '_blank');
    }).catch((err) => {
      console.log(err.message);
    });
    console.log(obj);
  }


  render() {
    return (


      <div className="container" >
        <p><h3  style={{backgroundColor:"#126EAC ",color: "white" ,padding: "10px",
    fontFamily: "Sans-Serif"}}>All Product details</h3></p>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          name="searchQuery"
          onChange={this.handleSearchArea}>

        </input>

        &nbsp;
        &nbsp;
        &nbsp;



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
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>

            {this.state.posts.map((posts, index) => (
              <tr key={index}>

                <th scope="row">{index + 1}</th>
                <td>
                  <a href={`/post/${posts._id}`} style={{ textDecoration: 'none' }}>
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
                  <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
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

      

    );
  }
}
