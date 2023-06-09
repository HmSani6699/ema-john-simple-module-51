import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    // pagination start
    const { totalProducts } = useLoaderData();
    console.log(totalProducts);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(10);

    const totalPage = Math.ceil(totalProducts / itemPerPage);

    const pageNumbers = [...Array(totalPage).keys()];

    const options = [5, 10, 20]
    const handleSelectChange = (event) => {
        setItemPerPage(parseInt(event.target.value));
        setCurrentPage(0)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage,itemPerPage]);

    // pagination end

    //------update to pagition ---------//
    
    // useEffect(() => {
    //     fetch(`http://localhost:5000/products`)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for (const id in storedCart) {
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product._id === id)
            if (addedProduct) {
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('added Product', addedProduct)
        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        // cart.push(product); '
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product._id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product._id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product._id)
    }

    return (
        <>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <div className='proceed-review-btn-container'>
                            <Link to="/order">
                                <button className='proceed-and-review-btn'>
                                    <span>Order review</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </Link>
                        </div>
                    </Cart>
                </div>
            </div>

            {/* pagination section */}
            <div className='pagination'>
                <p>Current page {currentPage}</p>
                {
                    pageNumbers.map(number => <button
                        key={number}
                        onClick={() => setCurrentPage(number)}
                        className={currentPage===number?'selectad':''}
                    >{number}</button>)
                }


                <select value={itemPerPage} onChange={handleSelectChange}>
                    {
                        options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))
                    }
                </select>
            </div>
        </>
    );
};

export default Shop;