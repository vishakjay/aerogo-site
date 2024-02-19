
import React, { useState } from 'react';
import './ShopPage.css'; 
import StickyFooter from './StickyFooter';


const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg' },
  { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg' },
  { id: 3, name: 'Product 3', price: 30, image: 'product3.jpg' },
  
];

const ShopPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const buyNow = (product) => {
    
    console.log(`Buying ${product.name} now`);
  };

  return (
    <>
    <div className="shop-page">
      <h1 className="page-title">Welcome to Our Shop</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img className="product-image" src={product.image} alt={product.name} />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price}</p>
            <div className="product-buttons">
              <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
              <button className="buy-now" onClick={() => buyNow(product)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2 className="cart-title">Shopping Cart</h2>
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
    </div>
    <StickyFooter />
    </>
  );
};

export default ShopPage;
