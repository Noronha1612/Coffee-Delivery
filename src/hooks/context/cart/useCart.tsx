import {
  LocalStorageKey,
  useLocalStorage,
} from "@/hooks/utility/useLocalStorage";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { addItemToCart } from "./actions";
import { cartReducer } from "./reducer";
import { Cart, CartItem } from "./types";

type CartContextProps = {
  items: CartItem[];
  totalValue: number;
  delivaryTax: number;

  addItem(item: CartItem): void;
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

  const insertItemToCart = (item: CartItem) => {
    dispatch(addItemToCart(item));
  };

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        addItem: insertItemToCart,
        totalValue,
        delivaryTax: DELIVERY_TAX_VALUE,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
