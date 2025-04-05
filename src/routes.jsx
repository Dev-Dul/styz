import App from "./App";
import Shop from "./Components/Shop";
import Hero from "./Components/Hero";
import Cart from "./Components/Cart";


const routes = [
    {
        path: '/',
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
            },
        ],
    },
]


export default routes;