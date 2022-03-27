import React, { lazy, Suspense } from "react";
import { Routes as SwitchRouters, Route } from "react-router-dom";

import Preloader from "app/components/preloader";

const Home = lazy(() => import("app/pages/home"));
const Cart = lazy(() => import("app/pages/cart"));
const Order = lazy(() => import("app/pages/order"));

export const mapRoutes = [
  {
    path: "/",
    element: <Home />,
    exact: false,
  },
  {
    path: "/cart",
    element: <Cart />,
    exact: true,
  },
  {
    path: "/order",
    element: <Order />,
    exact: true,
  },
];

const Routes = () => (
  <Suspense fallback={<Preloader />}>
    <SwitchRouters>
      {mapRoutes.map((item) => (
        <Route key={item.path} {...item} />
      ))}
    </SwitchRouters>
  </Suspense>
);

export default Routes;
