import { CartActions, CartItem, UpdateItemQuantityPayload } from "./types";
import { action } from "typesafe-actions";

export const addItemToCart = (item: CartItem): ReducerAction<CartActions> =>
  action(CartActions.ADD_ITEM, { item });

export const updateItemQuantity = (
  payload: UpdateItemQuantityPayload
): ReducerAction<CartActions> =>
  action(CartActions.UPDATE_ITEM_QUANTITY, payload);
