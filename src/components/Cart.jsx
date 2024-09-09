import React from 'react';
const Cart = ({cartItems})=>
{
 return(
    <div>
        <h2> Shopping Cart</h2>
        {cartItems.lenght===0?(<p> your cart is empty</p>):
        (<p></p>)}
    </div>
 )
}