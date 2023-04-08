const loadedCartProduct = async () => {
    const loadProduct = await fetch('products.json');
    const products = await loadProduct.json();
    return products
}

export default loadedCartProduct;