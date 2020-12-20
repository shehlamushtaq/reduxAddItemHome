import React from 'react'
import { useSelector } from 'react-redux';

const ProductList = () => {

    const products = useSelector (state => state.products);
    const cartItems = useSelector(state => state.cartItems);

    return (
        <div>
            <h3>Products</h3>
            <ul>
                {
                    products.map ( (item, ind) => <li key={ind}>{item.title}</li>)
                }
            </ul>
        </div>
    )
}

export default ProductList
