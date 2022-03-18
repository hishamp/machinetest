import { REMOVE_ITEM } from "../cart.types";

const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export default removeItem;