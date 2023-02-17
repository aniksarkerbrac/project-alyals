import React from "react";
import ProductCard from "../ProductCard/ProductCard";

import fakedata from "../../data.json"
import "./Card.css";
import { Container, Row } from "react-bootstrap";


const Card = (props) => {
  return (
    <section className="tour-package my-5 py-1">
      <div className="text-center">
        <h3 className="product-type">{props.type}</h3>
        {/* <h2>Popular Tour Package</h2> */}
      </div>

      <Container>
        <Row
          xs={1}
          sm={1}
          md={2}
          lg={3}
          className="g-5 mx-auto"
          style={{ padding: "15px", marginTop: "2rem" }}
        >
          {fakedata.map((data) => (
            <ProductCard packages={data}></ProductCard>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Card;
