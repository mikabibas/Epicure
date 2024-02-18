import "App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "pages/homepage/Homepage";
import Restaurants from "pages/restaurants/Restaurants";
import Chefs from "pages/chefs/Chefs";
import RestaurantPage from "pages/restaurants/RestaurantPage";
import Header from "components/header/Header";
import Footer from "components/Footer";
import ErrorBoundary from "components/errorHandling/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
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
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
