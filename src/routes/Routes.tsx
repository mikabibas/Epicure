import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/homepage/Homepage";
import Restaurants from "../pages/restaurants/Restaurants";
import Chefs from "../pages/chefs/Chefs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <Homepage/>},
            {path: "restuarants", element: <Restaurants/>},
            {path: "chefs", element: <Chefs/>},
        ]
    }
])