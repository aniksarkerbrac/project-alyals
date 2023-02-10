import React from "react";
import Carousels from "../Carousels/Carousels";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const Home = () => {
  const productStatus = ["NEW ARRIVAL", "SALE"];
  return (
    <div className="container p-2 px-5">
      <Carousels></Carousels>
      <Card type={productStatus[0]}></Card>
      <Card type={productStatus[1]}></Card>
      <Footer></Footer>
    </div>
  );
};

export default Home;
