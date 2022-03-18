import { DELETE_ITEM } from "../cart.types";

const deleteItem = (id) => {
  console.log("de",id);
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

export default deleteItem;
