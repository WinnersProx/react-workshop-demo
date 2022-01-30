import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import Card from "../UI/Card";
import "./productCard.css";
import Button from "../UI/Button";
import share from '../../asset/images/share.png'
import love from '../../asset/images/love.png'
import Modal from "../model/Model";


const ProductCard= ({ id, title, price, image }) => {
  
 
  let productId = id;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/newpage/${productId}`);
  };
  
  
  

  console.log(productId);


 

  const deleteProduct = (proId) => {

    // DELETE request using fetch with error handling

    axios
      .delete(`https://fakestoreapi.com/products/${proId}`, { method: "DELETE" })

      .then((response) => {

        console.log(response);
        alert(" confirm delete product")

      }).catch((error) => {

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
         
  <button type="button"  onClick={handleClick}  >

              {/* onClick={() => editProduct(productId)} */}
             


              View
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

export default ProductCard;
