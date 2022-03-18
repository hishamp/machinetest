import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cart/cart.reducer";

const store = createStore(cartReducer, applyMiddleware(thunk));

export default store;