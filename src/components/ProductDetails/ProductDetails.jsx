import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import productimg from "./44S544S044WH.jpg";
import "./ProductDetails.css"

export default function ProductDetails() {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Image src={productimg} alt="product-img" fluid />
           
          </Col>

          {/* 2nd col */}
          <Col xs={12} md={6}>
            <h3 className="product-header">
              Balm-Oil-Milk Transforming Cleansing Balm Comes Back in Refreshing
              Mandarin!
            </h3>
            <p className="price">price:৳1,100.00</p>
            <p className="product-desc">
              Easily and quickly melts down waterproof makeups, impurities, and
              other excess that has been layered throughout the day. No need to
              double cleanse! No more hurting eyes with this super gentle
              cleanser!
            </p>

            <p className="product-desc"> 50ml / All Skin Types / Made in Korea</p>

            <button className="button-one">+</button>
            <div className="button-two">
             1
            </div>
            <button className="button-one">-</button>
            <button className="button-fourth">Add to Bag</button>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
}
