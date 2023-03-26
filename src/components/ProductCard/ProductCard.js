import React from "react";
import "./ProductCard.css";

import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart} from "react-icons/ai";
import { CartState } from "../../Context/Context";

const ProductCard = ({packages}) => {
 
  const {state:{cart},dispatch}=CartState()

  return (
    <div>
      <NavLink to="/product-details" style={{textDecoration:"none"}}>

      <div
        className="style-card card p-2 m-0"
        style={{ width: "15rem", height: "20rem" }}
      >
        <img src={packages.img} alt="" className="product-img" />


        <div class="card-body text-center">
          <h5 class="card-title">{packages.title}</h5>
          <p class="card-text product-desc">{packages.description.slice(0, 20)}...</p>
          <p className="price-style m-2">TK {packages.price}</p>

              <span> <FiShoppingCart className="cart-icon"/></span> 
              <span> < AiOutlineHeart className="wishlist"/></span> 
         
        </div>
      </div>

      </NavLink>
    
    </div>
  );
};

export default ProductCard;
