import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import axios from "axios";

const ProductItem = () => {

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

    console.log(product);
    const { id, title, price, description, image } = product;
return(
    <div key={id}> {title} </div>
)
  ;
  });

  return <Fragment>
      {renderProducts}
  </Fragment>;
};

export default ProductItem;
