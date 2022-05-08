import "./HomeScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SearchStyles.css";


// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);



  // const [searchTerm, setSearchTerm] = useState("");
  

  return (
  <div className="homescreen"><br></br>
    <h2 className="homescreen__title">...Sell Or Buy In One Place...<br></br>
    </h2>
    <h4 className="homescreen__title1">Wave spare parts are one of the famous brand in Sri Lanka under more than 25 years.<br></br>
    anyway you can trust our service and use it.<br></br><br></br></h4>
    <h3 className="homescreen__title2">You can buy any spare parts<br></br><br></br>
    Shop Now </h3><br></br>
    

    <div className="templateContainer">
      <div className="searchinput_Container">
        <input id="searchInput" type="text" placeholder="Search here..."/>
      </div>
      <div className="template_Container">
        {/* {
          data
            .filter((val) => {
              if(searchTerm == ""){
                return val;
              } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            })
            .map((val) => {
              return (
                <div className="template" key={val.id}>
                  <img src={val.imageUrl} alt="" />
                  <h3>{val.title}</h3>
                  </div>
              )
            }) */}
        {/* } */}
      </div>
    </div>



    
    <div className="homescreen__products">
    {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        products.map((product) =>( 
        <Product 
        key={product._id} 
        productId={product._id}
          name={product.name}
          price={product.price}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))
      )}
      

    </div>
  </div>
  );
};

export default HomeScreen;