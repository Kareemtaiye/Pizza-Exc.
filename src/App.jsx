import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { Loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as orderAction,
} from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        { path: "/cart", element: <Cart /> },
        {
          path: "/order/new",
          element: <CreateOrder />,
          errorElement: <Error />,
          action: orderAction,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: orderLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
