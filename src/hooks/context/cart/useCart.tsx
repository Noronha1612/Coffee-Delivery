import React, { createContext, useContext, useReducer } from "react";
import { addItemToCart } from "./actions";
import { cartReducer } from "./reducer";
import { Cart, CartItem } from "./types";

type CartContextProps = {
  cart: Cart;

  addItem(item: CartItem): void;
};

type CartContextProviderProps = {
  children: React.ReactNode;
};

const CartContext = createContext({} as CartContextProps);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  const insertItemToCart = (item: CartItem) => {
    dispatch(addItemToCart(item));
  };

  return (
    <CartContext.Provider value={{ cart, addItem: insertItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
