import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import axios from "axios";
import Card from "../UI/Card";
import "./productItem.css";
import Button from "../UI/Button";
import share from '../../asset/images/share.png'
import love from '../../asset/images/love.png'

const ProductItem = ({ id, title, price, description, image }) => {
  let productId = id;

  console.log(productId);

  const deleteProduct = (proId) => {
    // DELETE request using fetch with error handling

    axios
      .delete(`https://fakestoreapi.com/products/${proId}`, { method: "DELETE" })
      .then((response) => {

        console.log(response);

      })
      .catch((error) => {

        console.log("There was an error!", error);

      });
  };

  const editProduct = (proId) => {

    const updateData = {
      title: "updating produtcs",
      price: "50",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    };

    // update request using fetch with error handling
    axios
      .put(`https://fakestoreapi.com/products/${proId}`, updateData)

      .then((response) => {

        console.log(response);

      })
      .catch((error) => {

        console.log("There was an error!", error);

      });
  };

  return (
    <Card>
      <div className="card-content">
        <div className="image">
          <img src={image} />
        </div>

        <div className="card-body">
          <h3>{title} h3</h3>

          {/* <p>{description} </p> */}

          <h3>${price} </h3>
         
        </div>
        <div className="card-button">
            <button type="button" onClick={() => editProduct(productId)}>
              Edit
            </button>
            <button type="button" onClick={() => deleteProduct(productId)}>
              delete
            </button>
          </div>
        <div className="share">
          <span> <img src={share} /></span>
          <span> <img src={love} /></span>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
