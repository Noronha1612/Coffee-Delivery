import { Reducer } from "react";
import {
  Cart,
  CartActions,
  CartItem,
  RemoveItemPayload,
  UpdateItemQuantityPayload,
} from "./types";

export const cartReducer: Reducer<Cart, ReducerAction<CartActions>> = (
  state,
  action
) => {
  switch (action.type) {
    case CartActions.ADD_ITEM:
      const itemToBeInserted = action.payload?.item as CartItem;

      return {
        ...state,
        items: [...state.items, itemToBeInserted],
      };

    case CartActions.REMOVE_ITEM:
      const { itemId: removedItemId } = action.payload as RemoveItemPayload;

      return {
        ...state,
        items: state.items.filter((item) => item.coffee.id !== removedItemId),
      };

    case CartActions.UPDATE_ITEM_QUANTITY:
      const { quantity, itemId } = action.payload as UpdateItemQuantityPayload;

      return {
        ...state,
        items: state.items.map((item) => {
          if (item.coffee.id !== itemId) return item;

          return {
            ...item,
            quantity,
          };
        }),
      };

    case CartActions.CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};
