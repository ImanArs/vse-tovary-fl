import { configureStore } from "@reduxjs/toolkit";
import categoryRoutesSlice from "./slices/categoryRoutesSlice";
import filterReducer from "./slices/filter-slice";


export const store = configureStore({
    reducer: {
      routes: categoryRoutesSlice,
      filter: filterReducer,
    }
})  