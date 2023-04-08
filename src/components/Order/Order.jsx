import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const loadProduct = useLoaderData();
    const [cart, setCart] = useState(loadProduct);
    const handleRemoveCart = (id) => {
        const getCart = cart.filter(product => product.id !== id);
        setCart(getCart);
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='review-item-container'>
                {
                    cart.map(product => <ReviewCart
                        key={product.id}
                        product={product}
                        handleRemoveCart={handleRemoveCart}
                    ></ReviewCart>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Order;