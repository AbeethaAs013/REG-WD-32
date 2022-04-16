import './Navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Navbar = ({click}) => {
  return (
    <nav className="navbar">
        {/* logo */}

    <div className="navbar_logo">
    <i className="fas fa-shopping-cart"></i>
        <h2>Wave Spare Parts</h2>
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
        <Link to="/cart" className="cart__link">
        <i className="fas fa-shopping-cart"></i>
        <span>
          Cart
          <span className="cartlogo__badge">0</span>
        </span>
       
        </Link>
        </li>

</ul>


  <Link to="" className="pro__icon">       
<i class="fa-solid fa-user-large"></i>
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