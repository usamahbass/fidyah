import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const HomePages = lazy(() => import("@fidyah/pages/HomePages"));
const PaymentPages = lazy(() => import("@fidyah/pages/PaymentPages"));

const routers = [
  {
    path: "/",
    exact: true,
    element: <HomePages />,
  },
  {
    path: "/pembayaran",
    exact: true,
    element: <PaymentPages />,
  },
];

const Routes = () => {
  const routing = useRoutes(routers);

  return routing;
};

export default Routes;
