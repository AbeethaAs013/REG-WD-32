import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Screens

import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";

//Components

import Navbar  from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
    
      {/*navbar*/}
      {/*sideDrawer*/}
      {/*backDrop*/}
      <main>
        <Routes>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Routes>
      </main>
      
      </Router>
  );
}

export default App;
