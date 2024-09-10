import React from 'react';
const Cart = ({cartItems})=>
{
 return(
    <div>
        <h2> Shopping Cart</h2>
        {cartItems.lenght===0?(<p> your cart is empty</p>):
        (
            <ul>
                {
                    cartItems.map((item, index)=>(
                        <li key = {index}>
                            {item.name} - ${item.price.ToFixed(2)}
                        </li>
                    ))
                }
            </ul>
        )
        (<p></p>)}
    </div>
 );
};
export default Cart;