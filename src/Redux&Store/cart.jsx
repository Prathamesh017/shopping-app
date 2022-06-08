import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cartSlice",
    initialState:{
        itemsList:[],
        totalQuantity:0,
        showCart:false,
        finaltotalprice:0
    },
    reducers:{
          addToCart(state,action){
              const newitem=action.payload;
            //   to check if the item already exists
             const existingItem=state.itemsList.find((item)=>item.id===newitem.id);
             if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice+=newitem.price;
             }
             else{
                 state.itemsList.push({
                     id:newitem.id,
                     name:newitem.name,
                     price:newitem.price,
                     quantity:1,
                     totalPrice:newitem.price,
                     
                 })
             }
             state.totalQuantity++;
             state.finaltotalprice+=newitem.price;
         
          },
          removeFromCart(state,action){
              const id=action.payload;

              const existingitem=state.itemsList.find((item)=>id===item.id);
              if(existingitem.quantity===1){
                  state.itemsList=state.itemsList.filter((item)=>item.id!==id);
              }
              else{
                  existingitem.quantity--;
                  existingitem.totalPrice-=existingitem.price;
                  
                }
                state.totalQuantity--;
                state.finaltotalprice-=existingitem.price;

          },
          showCart(state){
             state.showCart=!state.showCart;
          }
          
    }
})

export const {addToCart,removeFromCart,showCart}=cartSlice.actions;
export default cartSlice.reducer;