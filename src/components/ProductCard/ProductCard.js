import React from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faCalendarWeek,faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ProductCard = (props) => {
    const { title, description, img, price, location,days, date } = props.package;
    return (
        <div className="col-md-3">
            <div className="style-card card p-2 m-0" style={{ width: '15rem' }}>
                {/* <img src={img} style={{ height: '200px' }} class="card-img-top" alt="..."/> */}
                <div style={{backgroundImage:`url(${img})`,height: '200px',backgroundSize:'cover'}}>
                    {/* <p className="btn btn-xs price-style m-2">TK {price}</p> */}
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <p className="price-style m-2">TK {price}</p>
                    <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                        <Tooltip className="tooltip-style" id="tooltip-top">
                        Add to Cart
                        </Tooltip>
                    }
                    >
                    <Button className="button-custom mx-1" size="sm"><ShoppingCartOutlinedIcon/></Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                        <Tooltip className="tooltip-style" id="tooltip-top">
                        Add to Wishlist
                        </Tooltip>
                    }
                    >
                    <Button className="button-custom mx-1" size="sm"><FavoriteBorderOutlinedIcon/></Button>
                    </OverlayTrigger>
                    {/* <button type="button" class="btn outline-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                        <ShoppingCartOutlinedIcon/>
                    </button> */}
                    {/* <a href="#" className="btn btn-sm btn-style"><FavoriteBorderOutlinedIcon/>Add to card</a> */}
                </div>
                {/* <small className="d-flex justify-content-around mt-3">
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</p>
                    <p><FontAwesomeIcon icon={faCalendarWeek} /> {date}</p>
                </small> */}
            </div>
        </div>
    );
};

export default ProductCard;