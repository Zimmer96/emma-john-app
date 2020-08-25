import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../PRODUCT/Product';
import Cart from '../CART/Cart';


const Shop = () => {
   
    const firstData = fakeData.slice(0,10);
    const [products,setProducts] = useState(firstData) ;
    const [cart, setCart] = useState([]);
    const handleAddProduct = (products) =>{
        console.log('product added',products);
        const newCart = [...cart,products];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            {
             products.map(product =><Product
                handleAddProduct={handleAddProduct} products={product}></Product>)
            }
        </div>
        <div className="card-container">
             <Cart cart={cart}></Cart>
        </div>
            </div>
            
         
    );
};

export default Shop;