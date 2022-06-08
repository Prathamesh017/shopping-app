import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux&Store/auth';
import Card from './Card'
import Product from './Product'; 
import cart, { showCart } from '../Redux&Store/cart';
function Main({  setisLoggedin}) { 
  const totalQuantity=useSelector((state)=>{return state.cart.totalQuantity});
  const finalTotalPrice=useSelector((state)=>{return state.cart.finaltotalprice});

  const showcart=useSelector((state)=>{return state.cart.showCart});
  
  const dispatch=useDispatch();
  const handleLogout=()=>{
    dispatch(showCart())
    dispatch(logout());
  }
  const displayCart=()=>{
    dispatch(showCart())
       
  }
  const placeOrder=()=>{
    if(!totalQuantity){
      alert("No item Selected");
      return;
    }
    else{
      alert("Order Sent Succesfully");
    }
  }
  return (
    <>
    <div className="header">
        <h2>Prathamesh Shopping App</h2>
        <button className='showCart' onClick={displayCart} >Cart:{totalQuantity} items</button >
        <button className='logoutBtn' onClick={handleLogout}>Logout</button>
    </div>
    <Card>

    </Card>
    {showcart && <Product></Product>}
    <div className="footer">
    <p className='totalAmount'>Total :{finalTotalPrice}</p>
    <button className='OrderBtn' onClick={placeOrder}>Place Order</button>
    </div>

    </>
  )
}

export default Main