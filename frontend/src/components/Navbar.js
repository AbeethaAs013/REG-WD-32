import './Navbar.css';
import { Link } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';


const Navbar = ({click}) => {
  return (
    <nav className="navbar">
        {/* logo */}

    <div className="navbar_logo">
      <img src="data:image/jpg;base64,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"></img>
    </div>

    <div className="wave_name">
          Wave Spare <br></br>Parts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    <ul className="navbar_links">

     

    <li>
        <Link to="">
          Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </Link>
        </li>

        <li>
        <Link to="/">
        &nbsp;&nbsp;products &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </Link>
        </li>

        <li>
        <Link to="/">
        &nbsp;&nbsp;About Us &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </Link>
        </li>
       
        <li>
        <Link to="/">
        &nbsp;&nbsp;Contact Us &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </Link>
        </li>

        <li>
        <Link to="/">
        &nbsp;&nbsp;FAQ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </Link>
        </li>


        
        <li>
        <Link to="/cart/:id" className="cart__link">
        <i className="fas fa-shopping-cart"></i>
        <span>
          Cart
          <span className="cartlogo__badge">0</span>
        </span>
       
        </Link>
        </li>

</ul>


  <Link to="" className="pro__icon">       
<img src="data:image/jpg;base64,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"></img>
</Link>

 

    {/* <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
    </div> */}

    </nav>
  )
}

export default Navbar