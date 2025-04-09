import App from "./App";
import Shop from "./Components/Shop";
import Hero from "./Components/Hero";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";


const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Hero />,
      },

      {
        path: "shop",
        element: <Shop />,
      },

      {
        path: "cart",
        element: <Cart />,
        children: [
          {
            path: "checkout",
            element: <Checkout />,
          },
        ],
      },
    ],
  },
];


export default routes;