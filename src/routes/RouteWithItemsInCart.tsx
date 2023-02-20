import { useCart } from "@/hooks/context/cart/useCart";
import { Navigate, Outlet } from "react-router-dom";
import { RouteName } from ".";

export const OutletWithItemsInCart = () => {
  const { items } = useCart();

  if (!items.length) {
    return <Navigate to={RouteName.ROOT} replace />;
  }

  return <Outlet />;
};
