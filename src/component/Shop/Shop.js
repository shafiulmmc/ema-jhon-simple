import React from "react";
import "../Shop/Shop.css";
import fakeData from "../../fakeData";
import { useEffect, useState } from "react/cjs/react.development";
import Product from "../Product/Product";
import { Link } from 'react-router-dom';
import Cart from "../Cart/Cart";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart , setCart] = useState([])

  useEffect(()=>{
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart) ;
    const previousCart = productKeys.map(pdkey => {
      const product = fakeData.find(pd => pd.key ===pdkey);
      product.quantity = savedCart[pdkey];
      return product;
    })
    setCart(previousCart)
  },[])

  const handleButton = (product) =>{
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if(sameProduct){
       count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(pd => pd.key !==toBeAddedKey);
      newCart = [...others, sameProduct]

    }else{
      product.quantity = 1
      newCart = [...cart, product]
    }
      
      setCart(newCart)
      addToDatabaseCart(product.key, count)
  }
  // console.log(products);

  return (
    <div className="shop-container">
        <div className="product-container">
          {
              products.map(product => <Product key={product.key} showButton={true} product={product} handleButton={handleButton}></Product>)
          }
        </div>
        <div className="cart-container">
            <Cart cart={cart}>
            <Link to="/review"> <button className="main-button">review order</button></Link>
            </Cart>
        </div>
     
    </div>
  );
};

export default Shop;
