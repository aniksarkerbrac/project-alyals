import React, { useEffect, useState } from 'react';


import { useParams } from 'react-router-dom';
export default function SingleCard() {


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
