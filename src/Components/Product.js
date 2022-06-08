import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from '../Redux&Store/cart';
function Product() {
    const CartItems = useSelector((state) => { return state.cart.itemsList })

    const dispatch=useDispatch();
    const increment=(data)=>{
        const {id,name,price}=data;

        dispatch(addToCart({
            id,
            name,
            price,
        }))
    }
    const decrement=(data)=>{
      const id=data.id;
      dispatch(removeFromCart(id))
    }
   
    return (

        <div className='Products'>
            <p className='CartTitle'>Your Cart</p>
            {
                CartItems.map((item) => {

                    return (
                        <div className="product" key={item.id}>
                            <p className='product-name'>Name:{item.name}</p>
                            <p className='product-price'>Price:{item.price}</p>
                            <p className='product-quantity'>Quantity:{item.quantity}</p>
                            <p className='product-total'>TotalPrice:{item.totalPrice}</p>
                            <button className='productBtn' onClick={()=>decrement(item)}>-</button>
                            <button className='productBtn' onClick={()=>increment(item)}>+</button>
                        </div>
                    )



                })
            }

            <p className='noItems'>{(CartItems.length) ? `` : "No items present in Cart"}</p>

        </div>
    )
}

export default Product