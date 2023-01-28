import { Reducer } from "react";
import { Cart, CartActions, CartItem } from "./types";

export const cartReducer: Reducer<Cart, ReducerAction<CartActions>> = (
  state,
  action
) => {
  switch (action.type) {
    case CartActions.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload.item as CartItem],
      };
    default:
      return state;
  }
};
