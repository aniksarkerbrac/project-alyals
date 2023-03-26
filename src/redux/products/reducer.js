import {
    ADD_PRODUCT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
  } from "./actionTypes";
  import products from "../../data.json"
  
  const initialState = {
    products: products,
    cart: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case ADD_TO_CART:
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity - action.payload.quantity,
                }
              : item
          ),
          cart: [...state.cart, action.payload],
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + action.payload.quantity,
                }
              : item
          ),
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
       
   
      case INCREASE_QUANTITY:
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
  
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      case DECREASE_QUANTITY:
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  