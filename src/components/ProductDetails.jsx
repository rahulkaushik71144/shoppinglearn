import React from 'react';
import { useParams } from 'react-router-dom';
const products = [
{id:1 , name:"Apple", price: 1.4, Description: "An apple a day keeps a doctor away, warning! not for docs"},
{id:2, name:"Banana", price: 6.8, Description: "A big long thick banana"},
{id:3, name:"Cherry", price: 9.32, Description: "Cherry on top"},
];
const ProductDetails = () =>
{
    const {productId} = useParams();
    product = products.find((p)=>p.id===parseInt(productId));
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


