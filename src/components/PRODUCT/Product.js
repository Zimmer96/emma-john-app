import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
const Product = (props) => {
    console.log(props)
    const { img, name, seller, price, stock } = props.products;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-name'>

                <h4 className='class'>{name}</h4><br />
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left,order quickly to get your desired product</small></p><br/>
                <button onClick={() => props.handleAddProduct(props.products)} className='add-button'><FontAwesomeIcon icon={faShoppingCart}/>Add to the cart</button>
            </div>

        </div>
    );
};

export default Product;