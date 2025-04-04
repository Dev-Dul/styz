import App from "./App";
import Shop from "./Components/Shop";
import Hero from "./Components/Hero";


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
        ],
    },
]


export default routes;