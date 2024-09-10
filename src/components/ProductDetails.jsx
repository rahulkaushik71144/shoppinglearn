import React from 'react';
import { useParams } from 'react-router-dom';
const products = [
{id:1 , name:"Apple", price: 1.4, description: "An apple a day keeps a doctor away, warning! not for docs"},
{id:2, name:"Banana", price: 6.8, description: "A big long thick banana"},
{id:3, name:"Cherry", price: 9.32,description: "Cherry on top"},
];
const ProductDetails = () =>
{
    const {productId} = useParams();
   const  product = products.find((p)=>p.id===parseInt(productId));
    if (!product){
        return <p>Product not found</p>

    }
    return(
        <div>
            <h2>{product.name}</h2>

            <p>Price: ${product.price}</p>
            <p>
                {product.description}
            </p>
        </div>
    );

};
export default ProductDetails;


