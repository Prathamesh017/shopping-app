import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import CartSlice from "./cart";
const Store=configureStore({
    reducer:{
        auth:authSlice,
        cart:CartSlice,
    }
})

export default Store