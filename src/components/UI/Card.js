import React from 'react';
import './card.css'

const Card = (props) => {

  return <div>

<div className="card">
      <div className="product">{props.children}</div>
    </div>
  </div>;
};

export default Card;
