import "App.scss";
import Header from "components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "pages/homepage/Homepage";
import Restaurants from "pages/restaurants/Restaurants";
import Chefs from "pages/chefs/Chefs";
import FooterDesktop from "components/FooterDesktop";
import Hero from "components/Hero";
import CardSlider from "components/CardRestSlider";
import data from "assets/restaurants.json";
import CardDishSlider from "components/CardDishSlider";
import Meaning from "components/Meaning";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/chefs" element={<Chefs />} />
        </Routes>
        <CardDishSlider cards={data} />
        <CardSlider cards={data} />
        <Meaning />
        <FooterDesktop />
      </BrowserRouter>
    </div>
  );
}

export default App;
