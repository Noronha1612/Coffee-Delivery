import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ContentWrapper } from "../components/layout/ContentWrapper";
import { Checkout } from "../pages/Checkout";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Success } from "../pages/Success";

export enum RouteName {
  ROOT = "/",
  HOME = "",
  CHECKOUT = "checkout",
  SUCCESS = "success",
}

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RouteName.ROOT} element={<ContentWrapper />}>
      <Route path={RouteName.HOME} element={<Home />} />
      <Route path={RouteName.CHECKOUT} element={<Checkout />} />
      <Route path={RouteName.SUCCESS} element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
