import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/cart/Cart";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../components/home/Home";
import Catalog from "../pages/catalog/Catalog";
import SuitDetails from './../components/suit/SuitDetails';

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/catalog",
                element: <Catalog />
            },
             {
                path: "/about",
                element: <About />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/suitdetails/:id", // ✅ this enables useParams
                element: <SuitDetails />
            }
              
              
        ]
    }
])