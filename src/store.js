import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./service/customerSlice";
import contactReducer from "./service/contactInfoSlice";
const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    contact: contactReducer,
  },
});

console.log(store.getState());
// console.log(store)
export default store;
