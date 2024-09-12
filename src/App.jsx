//code copied by me from chatgpt... 
// import React, { useState } from "react";
// import Header from "./components/Header";
// import ProductList from "./components/ProductList";
// import Cart from "./components/Cart";
// import "/home/rahul/Desktop/shoppinglearn/App.css";
// import ProductDetails from "./components/ProductDetails";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<ProductList />} />
//           <Route path="/products/:productId" element={<ProductDetails />} />
//           <Route path="/cart" element = {<Cart />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };
// const Home = () =>
// {
//   <div>
//     <h2>Welcome To My Shopping Website </h2>
//     <p> Start Shopping Now</p>
//   </div>
// }
// export default App;


// src/App.jsx
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import "/home/rahul/Desktop/shoppinglearn/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h2>Welcome to the Simple Shopping Site</h2>
    <p>Start shopping now!</p>
  </div>
);

export default App;
