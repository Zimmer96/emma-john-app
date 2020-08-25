import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = formatNumber(totalPrice + product.price);
    }
    let shippingCost = 0;
    if(totalPrice > 35){
        shippingCost = 0;
    }
    else if(totalPrice > 14){
        shippingCost = 4.99;
    }
    else if(cart.length > 0){
        shippingCost = 12.99;
    }
    const tax = formatNumber(totalPrice * .15);
    const grandTotal = formatNumber(totalPrice + shippingCost + Number(tax))
    return (
        <div>
            <h4>Order summary:</h4>
    <p>Items ordered: {cart.length}</p>
    <p>Product price: {totalPrice}</p>
    <p>Tax : {tax}</p>
    <p><small>Shipping cost : {shippingCost}</small></p>
    <p>Total price: {grandTotal}</p>
        </div>
    );
};

export default Cart;