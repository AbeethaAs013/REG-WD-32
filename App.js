 
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home'; 
import PostDetails from './components/PostDetails';
import Navbar from './components/Navbar';
import pdfGenerate from './components/pdf';
 

 

 function App () {
  
    return (
      <BrowserRouter>
       
     <Navbar/>
      <Switch> 
       
        <Route path="/"exact component={Home}></Route>
        <Route path="/add" component={CreatePost}></Route>
        <Route path="/edit/:id" component={EditPost}></Route>
        <Route path="/post/:id" component={PostDetails}></Route>
        <Route path="/pdf" component={pdfGenerate}></Route>
        
  </Switch>

        
        
      
    
        
        {/* <Route path='/' element={<Home/>} />
        <Route path='/add' element={<CreatePost/>} />
        <Route path='/post/:id' element={<PostDetails/>} />
        <Route path='/edit/:id' element={<EditPost/>} />
       */}
       
      
       
      </BrowserRouter>
      
    )
  }
export default App;

