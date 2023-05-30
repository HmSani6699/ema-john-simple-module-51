import { getShoppingCart } from "../utilities/fakedb";

const loadedCartProduct = async () => {

    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart)
    console.log('all ids', ids);

    const loadProduct = await fetch('http://localhost:5000/productsIDS', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ids)
    });


    const products = await loadProduct.json();
    console.log(products);

    const storedProduct = [];
    for (const id in storedCart) {
        const getProduct = products.find(product => product._id === id);
        if (getProduct) {
            const quantity = storedCart[id];
            getProduct.quantity = getProduct.quantity + quantity;
            storedProduct.push(getProduct)
        }
    }
    return storedProduct
}

export default loadedCartProduct;