import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import locationReducer from "./locationReducer";
import cartreducer from "./cartreducer";
import userReducer from "./userReducer";
export default combineReducers({
  products: productsReducer,
  location: locationReducer,
  cart: cartreducer,
  user: userReducer,
});
