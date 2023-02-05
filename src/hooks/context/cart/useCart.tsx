import {
  LocalStorageKey,
  useLocalStorage,
} from "@/hooks/utility/useLocalStorage";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import {
  addItemToCart,
  clearCartItems,
  removeItemFromCart,
  updateItemQuantity,
} from "./actions";
import { cartReducer } from "./reducer";
import { Cart, CartItem } from "./types";

type CartContextProps = {
  items: CartItem[];
  totalValue: number;
  delivaryTax: number;

  addItem(item: CartItem): void;
  removeItem(itemId: number): void;
  updateQuantity(itemId: number, newQuantity: number): void;
  clearCart(): void;
};

type CartContextProviderProps = {
  children: React.ReactNode;
};

const DELIVERY_TAX_VALUE = 3.5;

const CartContext = createContext({} as CartContextProps);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const { data, setStoreData } = useLocalStorage(LocalStorageKey.Cart);

  const [cart, dispatch] = useReducer(cartReducer, data ?? { items: [] });

  const totalItemsValue = cart.items.reduce(
    (acc, item) => acc + item.coffee.price * item.quantity,
    0
  );

  const totalValue = totalItemsValue + DELIVERY_TAX_VALUE;

  useEffect(() => {
    setStoreData(cart);
  }, [cart]);

  const updateQuantity = (itemId: number, newQuantity: number) => {
    dispatch(
      updateItemQuantity({
        itemId,
        quantity: newQuantity,
      })
    );
  };

  const removeItem = (itemId: number) => {
    dispatch(removeItemFromCart(itemId));
  };

  const insertItemToCart = (itemInserted: CartItem) => {
    const existingItem = cart.items.find(
      (item) => item.coffee.id === itemInserted.coffee.id
    );

    toast.success("Café adicionado! ☕");
    if (existingItem) {
      return dispatch(
        updateItemQuantity({
          itemId: itemInserted.coffee.id,
          quantity: existingItem.quantity + itemInserted.quantity,
        })
      );
    }

    dispatch(addItemToCart(itemInserted));
  };

  const clearCart = () => {
    dispatch(clearCartItems());
  };

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        addItem: insertItemToCart,
        removeItem,
        totalValue,
        updateQuantity,
        delivaryTax: DELIVERY_TAX_VALUE,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
