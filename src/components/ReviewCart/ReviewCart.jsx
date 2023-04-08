import React from 'react';
import './ReviewCart.css'

const ReviewCart = ({ product }) => {
    console.log(product);
    const { id, name, img, quantity, price } = product;
    return (
        <div className='review-item'>
            <div className='review-details'>
                <img src={img} alt="" />
                <div>
                    <p className='review-title'>{name}</p>
                    <p className='review-price'>Price : <span className='author-text'>$ {price}</span></p>
                    <p className='review-quantity'>Quantity : <span className='author-text'>{quantity}</span></p>
                </div>
            </div>

        </div>
    );
};

export default ReviewCart;