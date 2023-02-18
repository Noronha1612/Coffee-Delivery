import { useEffect, useState } from "react";
import { Cart } from "../context/cart/types";
import { ThemesAvailable } from "../context/theme/useAppTheme";

export enum LocalStorageKey {
  Cart = "@coffee-delivery/cart",
  Theme = "@coffee-delivery/app-theme",
}

type LocalStorageContent = {
  [LocalStorageKey.Cart]: Cart;
  [LocalStorageKey.Theme]: ThemesAvailable;
};

export function useLocalStorage<
  Key extends LocalStorageKey,
  T extends LocalStorageContent[Key]
>(key: Key) {
  const [data, setData] = useState<T | undefined>(() => {
    const rawItem = localStorage.getItem(key);

    return rawItem ? JSON.parse(rawItem) : undefined;
  });

  useEffect(() => {
    if (!data) {
      localStorage.removeItem(key);
      return;
    }

    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  const setStoreData = (newData: T) => {
    setData(newData);
  };

  const clearStoreData = () => setData(undefined);

  return { data, setStoreData, clearStoreData };
}
