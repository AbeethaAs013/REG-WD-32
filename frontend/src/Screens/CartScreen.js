import './CartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
//import { toast } from 'react-toastify';
import ReactToPrint from 'react-to-print';
//import React, { useRef } from 'react';

//components
import CartItem from "../components/CartItem";


// import { ComponentToPrint } from "../Screens/ComponentToPrint";

// Actions
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
// import { render } from 'express/lib/response';

const CartScreen = () => {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);


  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce ((qty, item) =>  Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce ((price, item) => (item.price * item.qty) + price, 0);
  };


  // const Example = () => {
  //   const componentRef = useRef();
  //   const handlePrint = useReactToPrint({
  //     content: () => componentRef.current,
  //   });

  
  return ( 
                      
  <div className="cartscreen">

  <div className="cartscreen__left">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div>
          Your cart is empty <Link to = "/"> Go Back </Link>
        </div>
      ) : (
        cartItems.map((item) => 
        <CartItem
        key={item.product} 
        item={item} 
        qtyChangeHandler={qtyChangeHandler} 
        removeHandler={removeHandler}/>)
      )}

      <div>
          <br/>
              <ReactToPrint
                  trigger={() => <button style={{ padding: '10px 17px', flex: '0.7',   border: '1px solid #171717', cursor: 'pointer', opacity: '0.9', marginRight:'10px',textDecoration:'none',color:'black'}} className="generateReport1 btn btn-info btn-lg" type="button"><i class="far fa-file-alt" aria-hidden="true"></i> 
                 &nbsp; Generate Report
                        </button>}
                              content={() => this.componentRef}
              />
          <br/>
      </div>


                    

    </div>
    <div className="cartscreen__right">
      <div className="cartscreen__info">
        <p>Subtotal ({getCartCount()}) items</p>
        <p>${getCartSubTotal().toFixed(2)}</p>
      </div>
      <div>
        <button>Proceed To Checkout</button>


        {/* <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div> */}
  
      </div>
    </div>
    </div>
  
  ); 
      };

// render(<Example />, document.querySelector("#root"));

export default CartScreen;