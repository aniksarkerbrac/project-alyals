import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/MainLogo.png";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Header = () => {
  return (
    <div className="container header d-flex justify-content-between">
      <nav>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "70px", height: "70px" }}
          ></img>
        </Link>
      </nav>
      <nav>
        <Link to="/home">
          <ShoppingCartOutlinedIcon />
          <span className=""> CART (0)</span>
        </Link>
        <Link to="/orders">
          <FavoriteBorderOutlinedIcon />
          <span className=""> WISHLIST (0)</span>
        </Link>
        <Link to="/inventory/addProduct">
          <span className="">LOGIN</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
