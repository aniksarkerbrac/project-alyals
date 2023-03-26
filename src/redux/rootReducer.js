import { combineReducers } from "redux";
import productReducer from "./products/reducer";

export const rootReducer = combineReducers({
  product: productReducer,
});
