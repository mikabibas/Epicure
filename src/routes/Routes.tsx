import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/homepage/Homepage";
import Restaurants from "../pages/restaurants/Restaurants";
import Chefs from "../pages/chefs/Chefs";
import RestaurantPage from "../pages/restaurants/RestaurantPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "restaurants", element: <Restaurants /> },
      { path: "restaurants/:restaurantId", element: <RestaurantPage /> },
      { path: "chefs", element: <Chefs /> },
    ],
  },
]);
