import "App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "pages/homepage/Homepage";
import Restaurants from "pages/restaurants/Restaurants";
import Chefs from "pages/chefs/Chefs";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadRestaurants } from "store/features/restaurantSlice";
import RestaurantPage from "pages/restaurants/RestaurantPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants() as any);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:restaurantId" element={<RestaurantPage />} />
        <Route path="/chefs" element={<Chefs />} />
      </Routes>
    </div>
  );
}

export default App;
