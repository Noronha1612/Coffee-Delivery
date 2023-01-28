import { CartActions, CartItem } from "./types";
import { action } from "typesafe-actions";

export const addItemToCart = (item: CartItem): ReducerAction<CartActions> =>
  action(CartActions.ADD_ITEM, { item });
