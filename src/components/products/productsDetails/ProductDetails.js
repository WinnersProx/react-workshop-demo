import React from "react";

import "./productsDetails.css";

import Card from "../../UI/Card";

import like from "../../../asset/images/like.jpg";
import Button from "../../UI/Button";

const ProductDetails = () => {
  return (
    <div className="productsdetails">
      <div className="container">
        <div className="container-left">
          <img src={like}></img>
          <div className="ratngs">
            <span>Ratings</span>
            <span>Ratings</span>
            <span>Ratings</span>
            <span>Ratings</span>
          </div>
        </div>
        <div className="container-right">
          <p>categories</p>
          <h1>title</h1>
          <p>$6778</p>
          <div className="description">
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <Button>By Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
