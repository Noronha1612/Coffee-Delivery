import { createBrowserRouter } from "react-router-dom";
import { ContentWrapper } from "../components/layout/ContentWrapper";
import { Checkout } from "../pages/Checkout";
import { Home } from "../pages/Home";
import { Success } from "../pages/Success";

export enum RouteName {
  ROOT = "/",
  HOME = "/",
  CHECKOUT = "/checkout",
  SUCCESS = "/success",
}

export const routes = createBrowserRouter([
  {
    path: RouteName.ROOT,
    element: <ContentWrapper />,
    children: [
      { path: RouteName.HOME, element: <Home /> },
      { path: RouteName.CHECKOUT, element: <Checkout /> },
      { path: RouteName.SUCCESS, element: <Success /> },
    ],
  },
]);
