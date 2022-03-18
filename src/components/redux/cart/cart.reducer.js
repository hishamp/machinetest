import { ADD_ITEM, DELETE_ITEM, REMOVE_ITEM } from "./cart.types";

const initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      if (state.cart.length < 1) {
        return {
          cart: [{ ...payload, count: 1 }],
          totalItems: 1,
          totalPrice: payload.price,
        };
      } else {
        if (
          typeof state.cart.find((item) => item.id === payload.id) !==
          "undefined"
        ) {
          let temp = state.cart;
          let i = state.cart.findIndex((item) => item.id === payload.id);
          temp[i] = { ...temp[i], count: temp[i].count + 1 };
          return {
            cart: [...temp],
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + payload.price,
          };
        } else {
          return {
            cart: [{ ...payload, count: 1 }, ...state.cart],
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + payload.price,
          };
        }
      }
    case REMOVE_ITEM:
      let i = state.cart.findIndex((item) => item.id === payload.id);
      if (state.cart[i].count === 1) {
        let temp = state.cart.filter((item) => item.id !== payload.id);
        return {
          ...state,
          cart: [...temp],
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - payload.price,
        };
      } else {
        let temp = state.cart;
        temp[i] = { ...temp[i], count: temp[i].count - 1 };
        return {
          ...state,
          cart: [...temp],
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - payload.price,
        };
      }
    case DELETE_ITEM:
      let temp = state.cart;
      let removing_item = temp.find((item) => item.id === payload);
      let count = removing_item.count;
      let price = removing_item.price;
      temp = temp.filter((item) => item.id !== payload);
      return {
        cart: [...temp],
        totalItems: state.totalItems - count,
        totalPrice: state.totalPrice - count * price,
      };
    default:
      return state;
  }
};

export default cartReducer;
