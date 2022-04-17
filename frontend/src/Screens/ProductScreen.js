import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { ToastContainer, toast } from "react-toastify";

// Actions

import { getProductDetails } from "../redux/actions/productActions"; 
import { addToCart } from "../redux/actions/cartActions";


//toast.configure();

const ProductScreen = ({match, history}) => {

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.getProductDetails);
  const {loading, error, product} = productDetails;

  let {id} = useParams();
  console.log("id = " + id);

  useEffect(() => {
     if (product && id !== product._id) {
       dispatch(getProductDetails(id));
     }

    
  }, [dispatch, product, match]);


  let navigate = useNavigate();

//   const addToCartHandler = () => {
//     navigate(`/cart${product._id} ? qty=${qty}`);
//   }; 
  
const addToCartHandler = () => {
  dispatch(addToCart(product._id, qty));
  //toast.success("Item ADD To Cart",{position:toast.POSITION.TOP_CENTER});
  //history.push("/cart");
  navigate("/cart");
}
  
  
  
  console.log(product);
  return (
    <div className="productscreen_1">
      {loading ? (
        <h2>Loading...</h2>
        ) : error ? (
        <h2>{error}</h2> 
        ) : (
        <>

      <div className="productscreen__left">
      <div className="left__image">
        <img src={product.imageUrl}
        alt={product.name}/>
      </div>

      <div className="left__info">
        <p className="left__name">{product.name}</p>
        <p>Price: ${product.price}</p>
        <p>
          Description: <br></br><br></br>
          {product.description}
        </p>
      </div>
    </div>
    
    
    
    <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span>${product.price}</span>
          </p>
          <p>
            Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock" }</span>
          </p>
          <p>
            Qty:
            <select value={qty} onChange={(e) =>setQty(e.target.value)}>
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x+1}
                </option>
              ))}
              
            </select>
          </p>
          <p>
            <button type="button" onClick={addToCartHandler}> Add To Cart </button>
          </p>
        </div>
      </div>
      </>
    )}
  </div>
  );
};

export default ProductScreen;