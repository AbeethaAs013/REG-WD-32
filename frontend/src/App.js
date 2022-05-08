import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Screens

import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";

//Components

import Navbar  from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {

  const [sideToggle, setsideToggle] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const searchHandler = (searchTerm) => {
  //   setSearchTerm(searchTerm);
  //   if (searchTerm !== ""){
  //     const newProducts = Products.filter((Product) => {
  //         console.log(Object.values(Product));
  //     }); 
  //   }
  // };

  return (
    <Router>
      <Navbar click={() => setsideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setsideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setsideToggle(false)}/>
    
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/product/:id" element={<ProductScreen/>}/>
          <Route exact path="/cart" element={<CartScreen/>}/>
        </Routes>
      </main>
      <Footer/>
      </Router>
     
  );
}

export default App;
