import React, { useEffect, useState } from 'react'

import product1 from "../../images/product1.jpg";
import product2 from "../../images/product2.jpg";
import product3 from "../../images/product3.png";
import product4 from "../../images/product4.jpg";
import { useParams } from 'react-router-dom';
export default function SingleCard() {

  // const fakedata = [
  //   {
  //     id: 1,
  //     title: "NSX002",
  //     description:
  //       "Some quick example text to build on the card title and make up the bulk of the cards content.",
  //     img: product1,
  //     location: "chittagong",
  //     price: "5000",
  //     days: "5",
  //     date: "September 10,2021",
  //   },
  //   {
  //     id: 2,
  //     title: "NSX003",
  //     description:
  //       "Some quick example text to build on the card title and make up the bulk of the cards content.",
  //     img: product2,
  //     location: "chittagong",
  //     price: "6000",
  //     days: "5",
  //     date: "September 10,2021",
  //   },
  //   {
  //     id: 3,
  //     title: "NSX025",
  //     description:
  //       "Some quick example text to build on the card title and make up the bulk of the cards content.",
  //     img: product3,
  //     location: "chittagong",
  //     price: "8000",
  //     days: "5",
  //     date: "September 10,2021",
  //   },
  //   {
  //     id: 4,
  //     title: "Air Max",
  //     description:
  //       "Some quick example text to build on the card title and make up the bulk of the cards content.",
  //     img: product4,
  //     location: "chittagong",
  //     price: "8000",
  //     days: "5",
  //     date: "September 10,2021",
  //   },
  
  //   {
  //     id: 5,
  //     title: "Air Max1",
  //     description:
  //       "Some quick example text to build on the card title and make up the bulk of the cards content.",
  //     img: product4,
  //     location: "chittagong",
  //     price: "8003",
  //     days: "5",
  //     date: "September 10,2021",
  //   },
  
  //   {
  //     id: 6,
  //     title: "Air Max2",
  //     description:
  //       "Some quick example text to build on the card title and make up the bulk of the cards content.",
  //     img: product4,
  //     location: "chittagong",
  //     price: "8001",
  //     days: "6",
  //     date: "September 10,2021",
  //   },
  // ];
  const [singleproduct,setSingleProduct]=useState({})
  const {id}=useParams()
  useEffect(() => {
    fetch(`data.json/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [id]);

  return (
    <div>
      
<div>{singleproduct.title}</div>

    </div>
  )
}
