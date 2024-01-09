import "App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "pages/homepage/Homepage";
import Restaurants from "pages/restaurants/Restaurants";
import Chefs from "pages/chefs/Chefs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/chefs" element={<Chefs />} />
      </Routes>
    </div>
  );
}

export default App;
