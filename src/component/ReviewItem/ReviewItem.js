import React from 'react';
import '../ReviewItem/ReviewItem.css';

const ReviewItem = (props) => {
    // console.log(props)
    const {name,quantity,key,price} = props.product;
    return (
        <div className="review-style">
            <h1>{name}</h1>
            <p>Quantity: {quantity}</p>
            <p><small>Price ${price}</small></p>
            <button className="main-button" onClick={()=> props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;