import {
  CartActions,
  CartItem,
  RemoveItemPayload,
  UpdateItemQuantityPayload,
} from "./types";
import { action } from "typesafe-actions";

export const addItemToCart = (item: CartItem): ReducerAction<CartActions> =>
  action(CartActions.ADD_ITEM, { item });

export const removeItemFromCart = (
  itemId: number
): ReducerAction<CartActions, RemoveItemPayload> =>
  action(CartActions.REMOVE_ITEM, { itemId });

export const updateItemQuantity = (
  payload: UpdateItemQuantityPayload
): ReducerAction<CartActions, UpdateItemQuantityPayload> =>
  action(CartActions.UPDATE_ITEM_QUANTITY, payload);

export const clearCartItems = (): ReducerAction<CartActions> =>
  action(CartActions.CLEAR_CART);
