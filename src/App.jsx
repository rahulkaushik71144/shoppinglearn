import React, { useState } from 'react'
import Header from './components/Header.jsx'
import '/home/rahul/Desktop/shoppinglearn/App.css';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
const App = () =>
{
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) =>
    {
      setCartItems(...cartItems, product);
    } ;
  return(
    <div> 
      <Header />
      <ProductList addToCart = {addToCart} />
      <Cart cartItems = {cartItems} />
    </div>
  );
};
export default App;