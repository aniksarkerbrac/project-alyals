import React from "react";
import "./ProductCard.css";

import { NavLink, useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart} from "react-icons/ai";
// import { CartState } from "../../Context/Context";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/products/action";
const ProductCard = ({packages}) => {
  const product = useSelector((state) => state.product.products);
  // const {state:{cart},dispatch}=CartState()
  const {id}=useParams()
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({ ...product, quantity: 1, maxQuantity: product.quantity })
    );
  };


  return (
    <div>
     

      <div
        className="style-card card p-2 m-0"
        style={{ width: "15rem", height: "20rem" }}
      >
        <img src={packages.img} alt="" className="product-img" />


        <div class="card-body text-center">
          <h5 class="card-title">{packages.title}</h5>
          <p class="card-text product-desc">{packages.description.slice(0, 20)}...</p>
          <p className="price-style m-2">TK {packages.price}</p>

              <span> <FiShoppingCart className="cart-icon" onClick={handleAddToCart}/></span> 
              <span> < AiOutlineHeart className="wishlist"/></span> 
         
        
        </div>

        <button className="btn btn-success w-100"> Check details</button>
      </div>

     
    
    </div>
  );
};

export default ProductCard;
