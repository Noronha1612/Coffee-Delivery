import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ContentWrapper } from "../components/layout/ContentWrapper";
import { Checkout } from "../pages/Checkout";
import { Home } from "../pages/Home";
import { Success } from "../pages/Success";
import { OutletWithItemsInCart } from "./RouteWithItemsInCart";

export enum RouteName {
  ROOT = "/",

  SUCCESS = "/success",

  CART = "/cart",
  CHECKOUT = "/cart/checkout",
}

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RouteName.ROOT} element={<ContentWrapper />}>
      <Route path={RouteName.ROOT} element={<Home />} />
      <Route path={RouteName.SUCCESS} element={<Success />} />

      <Route path={RouteName.CART} element={<OutletWithItemsInCart />}>
        <Route path={RouteName.CHECKOUT} element={<Checkout />} />
      </Route>
    </Route>
  )
);
