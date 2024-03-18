import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./service/customerSlice";
const store = configureStore({
  reducer: recipeReducer,
});

console.log(store.getState());
// console.log(store)
export default store;
