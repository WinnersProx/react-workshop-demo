import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";
import'./products.css'

const ProdutLists = () => {
  const [products, setproduts] = useState([]);

  const getProduts = async () => {
    const response = await axios

      .get("https://fakestoreapi.com/products")

      .catch((error) => {
        console.log(error);
      });

    setproduts(response.data);
  };

  useEffect(() => {
    getProduts();
  }, []);

  const renderProducts = products.map((product) => {
    const { id, title, price, description, image } = product;
    
  return(<ProductCard
    key={id}
    id={id}
    title={title}
    description={description}
    price={price}
    image={image}
  />);  
  });

  return products.length <= 0 ? (
    <div className="loader"
                        role="status" id="loading">
                       <span className="">Loading...</span>
                   </div>
  ):(


  <Fragment>
    <div className="products-container">

    {  renderProducts}

    </div>
    
    
    </Fragment>
  
  )
};

export default ProdutLists;
