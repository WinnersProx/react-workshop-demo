import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import axios from "axios";
import Card from "../UI/Card";
import './productItem.css'


const ProductItem = ({ id, title, price, description, image }) => {
  return (
    <Card>
      <div className="card-content">
        <img src={image} />
        <div className="card-body">
          <h3>{title} h3</h3>
          <p>{description} </p>
          <h3>${price} </h3>
        </div>
        <div className="card-button">
          <button type="button">Edit</button>
          <button type="button">delete</button>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
