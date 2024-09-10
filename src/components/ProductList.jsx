import React from 'react';
const products = [
  { id: 1, name: "apple", price: 2 },
  {
    id: 2,
    name: "banana",
    price: 6,
  },
  {
    id: 3,
    name: "eggplant",
    price: 8,
  },
];

const ProductList = ({addToCart}) =>

{

return(
    <div>
        <h2> Products list:</h2>
        <ul>
            {products.map((product)=>(
                <li key={product.id}>
                {product.name} - ${product.price.toFixed(2)}
                <button onClick={()=> addToCart(product)}>
                  Add To cart

                </button>
                </li>
            ))}
        </ul>
    </div>
);
};
export default ProductList;


