import { configureStore } from "@reduxjs/toolkit";
import CheckOutReducer from "./CheckOutSlice";
import CartSlice from "./CartSlice";
export const store = configureStore({
    reducer: {
        checkout: CheckOutReducer,
        cart: CartSlice
    }
})