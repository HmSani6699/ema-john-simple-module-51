import React from 'react';
import './ReviewCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewCart = ({ product, handleRemoveCart }) => {
    const { _id, name, img, quantity, price } = product;
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
            <div onClick={() => handleRemoveCart(_id)} className='delete-icon'>
                <FontAwesomeIcon icon={faTrashCan} />
            </div>
        </div>
    );
};

export default ReviewCart;