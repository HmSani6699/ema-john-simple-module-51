import React from 'react';
import './ReviewCart.css'

const ReviewCart = ({ product }) => {
    console.log(product);
    return (
        <div className='review-item'>
            <h2>Review cart product</h2>
        </div>
    );
};

export default ReviewCart;