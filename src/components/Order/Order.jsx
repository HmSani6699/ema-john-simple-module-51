import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Order = () => {
    const loadProduct = useLoaderData();
    console.log(loadProduct)
    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h1>This is order container</h1>
            </div>
            <div className='cart-container'>
                <Cart cart={loadProduct}></Cart>
            </div>
        </div>
    );
};

export default Order;