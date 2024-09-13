import React from 'react';
const Cart = ({cartItems})=>
{
 return(
    <div>
        <h2> Shopping Cart</h2>
        {cartItems.length===0?(<p> your cart is empty</p>):
        (
            <ul>
                {
                    cartItems.map((item, index)=>(
                        <li key = {index}>
                            {item.name} - ${item.price.toFixed(2)}
                        </li>
                    ))
                }
            </ul>
        )
        }
    </div>
 );
};
export default Cart;
