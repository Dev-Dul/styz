import App from "./App";
import Shop from "./Components/Shop";
import Hero from "./Components/Hero";
import Checkout from "./Components/Checkout";


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
                path: "checkout",
                element: <Checkout />,
            },
        ],
    },
]


export default routes;