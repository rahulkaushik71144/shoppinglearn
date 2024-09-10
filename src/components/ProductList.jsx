// src/components/ProductList.jsx
// import React from "react";

// const products = [
//   { id: 1, name: "Apple", price: 1.0 },
//   { id: 2, name: "Banana", price: 0.5 },
//   { id: 3, name: "Cherry", price: 2.0 },
// ];

// const ProductList = ({ addToCart }) => {
//   return (
//     <div>
//       <h2>Products</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - ${product.price.toFixed(2)}
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;



// src/components/ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Apple', price: 1.0 },
  { id: 2, name: 'Banana', price: 0.5 },
  { id: 3, name: 'Cherry', price: 2.0 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link> - ${product.price.toFixed(2)}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
