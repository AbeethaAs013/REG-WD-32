import './CartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

//components
import CartItem from "../components/CartItem";

const CartScreen = () => {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { CartItems} = cart;



  return (
  <div className="cartscreen">
    <div className="cartscreen__left">
      <h2>Shopping Cart</h2>

      {CartItems?.length === 0 ? (
        <div>
          Your cart is empty <Link to = "/"> Go Back </Link>
        </div>
      ) : (
        CartItems?.map((item) => <CartItem item={item} />)
      )}

    </div>
    <div className="cartscreen__right">
      <div className="cartscreen__info">
        <p>Subtotal (0) items</p>
        <p>$499.99</p>
      </div>
      <div>
        <button>Proceed To Checkout</button>
      </div>
    </div>
  </div>
  
);
};

export default CartScreen;