import React from "react";
import "../Product/Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const Product = (props) => {
  console.log(props)
  // console.log(props.product.key)
  const { name, img, price, seller, stock, key} = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="product" />
      </div>
      <div className="product-info">
        <h1><Link to={"/product/"+key}>{name}</Link> </h1>
        <p>by:{seller}</p>
        <p>${price}</p>
        <p>Only {stock} left in stock order soon</p>
        {props.showButton &&<button className="main-button" onClick={()=>props.handleButton(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
      </div>
    </div>
  );
};

export default Product;
