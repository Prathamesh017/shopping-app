import React from 'react';
import { useDispatch } from 'react-redux';
import datas from "../data";
import img from "./photo.jpeg";
import {addToCart} from "../Redux&Store/cart";
function Card() {
  const dispatch=useDispatch();
  const addtoCart=(data)=>{
    const {id,name,price}=data;
    dispatch(addToCart({
         id,
         name,
         price,
    }))

  }
  return (
      <div className="card-container">

      {datas.map((data)=>{
          return(
              
          <div className="Card" key={data.id}>
         <img src={img} alt="noimage"></img>
         <p className='name'>{data.name}</p>

         <p className='price'>{data.price}$</p>
         <button className='addBtn' onClick={()=>{addtoCart(data)}}>Add to Cart</button>
      </div>
          )
      })
    }
    
      </div>
  )
}

export default Card