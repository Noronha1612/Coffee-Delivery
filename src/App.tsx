import { RouterProvider, Routes } from "react-router-dom";
import { CartContextProvider } from "./hooks/context/cart/useCart";
import { routes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <CartContextProvider>
      <RouterProvider router={routes} />
      <GlobalStyles />
    </CartContextProvider>
  );
};
