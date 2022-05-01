import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import locationReducer from "./locationReducer";
import cartreducer from "./cartreducer";
export default combineReducers({
  products: productsReducer,
  location: locationReducer,
  cart: cartreducer,
});
