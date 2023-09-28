import { ADD_To_CART, REMOVE_FROM_CART } from "./constants";

const initialState = {
  items: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_To_CART:
      return {
        ...state,
        items: [...state.items, action.data],
      };

    case REMOVE_FROM_CART:
    const newItems = state.items.filter((item)=>item.id !== action.data);
    return {
        ...state,
        items: newItems,
      };

    default:
      return state;
  }
};
