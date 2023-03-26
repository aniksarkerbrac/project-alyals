import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import cartMiddleware from "./middlewares/cartMiddleware";


const store = createStore(
  rootReducer,
  applyMiddleware(cartMiddleware)

);

export default store;