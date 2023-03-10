import React from "react";
import Carousels from "../Carousels/Carousels";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import SingleCard from "../SingleCard/SingleCard";

const Home = () => {
  const productStatus = ["New Arrival", "Sale"];
  return (
    <div className="container p-2 px-5">
      <Carousels></Carousels>
      <Card type={productStatus[0]}></Card>
      <Card type={productStatus[1]}></Card>
      <SingleCard />
      <Footer></Footer>
    </div>
  );
};

export default Home;
