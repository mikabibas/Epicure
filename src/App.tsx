import "App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "pages/homepage/Homepage";
import Restaurants from "pages/restaurants/Restaurants";
import Chefs from "pages/chefs/Chefs";
import RestaurantPage from "pages/restaurants/RestaurantPage";
import Header from "components/header/Header";
import Footer from "components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route
            path="/restaurants/:restaurantId"
            element={<RestaurantPage />}
          />
          <Route path="/chefs" element={<Chefs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
