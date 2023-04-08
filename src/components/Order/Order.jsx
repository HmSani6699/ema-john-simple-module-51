import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const loadProduct = useLoaderData();
    const [cart, setCart] = useState(loadProduct);
    const handleRemoveCart = (id) => {
        const getCart = cart.filter(product => product.id !== id);
        setCart(getCart);
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
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
                    handleClearCart={handleClearCart}
                >
                    <div className='proceed-review-btn-container'>
                        <Link to="/proceed">
                            <button className='proceed-and-review-btn' >
                                <span>Proceed Checkout</span>
                                <FontAwesomeIcon icon={faCreditCard} />
                            </button>
                        </Link>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Order;