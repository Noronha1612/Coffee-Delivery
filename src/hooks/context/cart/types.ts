import { Coffee } from "@/models/Coffee";

export type CartItem = {
  coffee: Coffee;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
};

export enum CartActions {
  ADD_ITEM = "add-item",
  UPDATE_ITEM_QUANTITY = "update-item-quantity",
}

export type UpdateItemQuantityPayload = {
  quantity: number;
  itemId: number;
};
