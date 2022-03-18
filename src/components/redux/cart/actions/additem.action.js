import { ADD_ITEM } from "../cart.types";

const addItem = (data) => {
  return {
    type: ADD_ITEM,
    payload: data,
  };
};

export default addItem;