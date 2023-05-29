import { getShoppingCart } from "../utilities/fakedb";

const loadedCartProduct = async () => {
    const loadProduct = await fetch('http://localhost:5000/products');
    const products = await loadProduct.json();

    const storedCart = getShoppingCart();
    const storedProduct = [];
    for (const id in storedCart) {
        const getProduct = products.find(product => product.id === id);
        if (getProduct) {
            const quantity = storedCart[id];
            getProduct.quantity = getProduct.quantity + quantity;
            storedProduct.push(getProduct)
        }
    }
    return storedProduct
}

export default loadedCartProduct;