import React from 'react';
// import { Link } from 'react-router-dom';
import '../Cart/Cart.css';

const Cart = (props) => {
    const cart= props.cart;
    let total = cart.reduce((total,prd) => total+prd.price * prd.quantity,0);
    let shipping = 0;
    if(total>35){
        shipping = 0
    }else if(total>15){
        shipping = 4.99
    }else if(total>0){
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }

    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Items Order {cart.length}</h3>
            <p>Product Price ${formatNumber(total)}</p>
            <p><small>Shipping</small> ${shipping}</p>
            <p><small>Tax + VAT ${tax}</small></p>
            <p>Total Price ${grandTotal}</p>
           {
               props.children
           }
        </div>
    );
};

export default Cart;