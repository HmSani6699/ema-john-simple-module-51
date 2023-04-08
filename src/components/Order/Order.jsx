import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Order.css'

const Order = () => {
    const loadProduct = useLoaderData();
    return (
        <div className='shop-container'>
            <div className='review-item-container'>
                {
                    loadProduct.map(product => <ReviewCart
                        key={product.id}
                        product={product}
                    ></ReviewCart>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={loadProduct}></Cart>
            </div>
        </div>
    );
};

export default Order;