import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const loadProduct = useLoaderData();
    console.log(loadProduct)
    return (
        <div>
            <h1>This is order container</h1>
        </div>
    );
};

export default Order;