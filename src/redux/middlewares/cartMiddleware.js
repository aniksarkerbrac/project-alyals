import { ADD_TO_CART } from "../products/actionTypes";

import { increaseQuantity } from "../products/action";

const cartMiddleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === ADD_TO_CART) {
      
      const { cart } = getState().product;
     
      const existingProduct = cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if ( existingProduct) {
        dispatch(increaseQuantity(action.payload.id));
        return;
      }
    }

    return next(action);
  };

export default cartMiddleware;
