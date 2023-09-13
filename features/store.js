import { configureStore } from "@reduxjs/toolkit";
import categoryRoutesSlice from "./slices/categoryRoutesSlice";

export const store = configureStore({
    reducer: {
      routes: categoryRoutesSlice
    }
})  