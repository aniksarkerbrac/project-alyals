import React from "react";
import "./ProductCard.css";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ProductCard = (props) => {
  const { title, description, img, price } = props.package;
  return (
    <div>
      <div
        className="style-card card p-2 m-0"
        style={{ width: "15rem", height: "20rem" }}
      >
        <img src={img} alt="" className="product-img" />

        <div class="card-body text-center">
          <h5 class="card-title">{title}</h5>
          <p class="card-text product-desc">{description.slice(0, 20)}...</p>
          <p className="price-style m-2">TK {price}</p>
          <Button className="button-custom mx-1" size="sm">
            <ShoppingCartOutlinedIcon />
          </Button>

          <Button className="button-custom mx-1" size="sm">
            <FavoriteBorderOutlinedIcon />
          </Button>

          {/* <OverlayTrigger
            key="top"
            placement="top"
            overlay={
              <Tooltip className="tooltip-style" id="tooltip-top">
                Add to Cart
              </Tooltip>
            }
          >
            <Button className="button-custom mx-1" size="sm">
              <ShoppingCartOutlinedIcon />
            </Button>
          </OverlayTrigger> */}

          {/* <OverlayTrigger
            key="top"
            placement="top"
            overlay={
              <Tooltip className="tooltip-style" id="tooltip-top">
                Add to Wishlist
              </Tooltip>
            }
          >
            <Button className="button-custom mx-1" size="sm">
              <FavoriteBorderOutlinedIcon />
            </Button>
          </OverlayTrigger> */}

          {/* <button type="button" class="btn outline-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                        <ShoppingCartOutlinedIcon/>
                    </button> */}
          {/* <a href="#" className="btn btn-sm btn-style"><FavoriteBorderOutlinedIcon/>Add to card</a> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
