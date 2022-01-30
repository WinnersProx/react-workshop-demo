import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

import "./productsDetails.css";
import Button from "../../UI/Button";
import Modal from "../../model/Model";

const Newpage = () => {


  const [product, setprodut] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);


  const { productId } = useParams();



  const updateProduct = (productData) => {
    setModalOpen(true)

    console.log("here", productData);

   



    axios
      .put(`https://fakestoreapi.com/products/${productId}`, productData)

      .then((response) => {
        alert(" successfully updated");
        console.log(response);
      })
      .catch((error) => {

        console.log("There was an error!", error);

      });
  };




  const getProduts = async () => {
    const response = await axios

      .get(`https://fakestoreapi.com/products/${productId}`)

      .catch((error) => {
        console.log(error);
      });

    setprodut(response.data);
  };

  useEffect(() => {
    if (productId && productId !== "") getProduts();
  }, [productId]);
  const { title, price, description, category, rating, image } = product;

  return (
    <div className="product-container">
      {product.length === 0 ? (
        <div className="loader" role="status" id="loading">
          <span className="">Loading...</span>
        </div>
      ) : (
        <div className="product-detail">
          <div className="detail-right">
            <div className="image">
              <img src={image} />
            </div>
            <div className="ratings">
              <span>rate: {rating.rate}</span>

              <span>count: {rating.count}</span>
            </div>
          </div>
          <div className="detail-left">
            <div className="title">
              <p>{category}</p>
              <h3>{title}</h3>
            </div>
            <div className="product-description">
              <p>${price}</p>
              <p> {description}</p>
            </div>
            <div className="button">
              <button
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && (
        <Modal setOpenModal={setModalOpen} onConfirm={updateProduct} />
      )}
    </div>
  );
};

export default Newpage;
