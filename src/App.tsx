import "App.scss";
import Header from "components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "pages/homepage/Homepage";
import Restaurants from "pages/restaurants/Restaurants";
import Chefs from "pages/chefs/Chefs";
import FooterDesktop from "components/FooterDesktop";
import Hero from "components/Hero";
import data from "assets/restaurants.json";
import CardDishSlider from "components/CardDishSlider";
import Meaning from "components/Meaning";
import ChefSection from "components/ChefSection";
import CardRestSlider from "components/CardRestSlider";
import AboutUs from "components/AboutUs";
import MediaQuery from "react-responsive";
import Footer from "components/Footer";

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
        <CardRestSlider cards={data} />
        <Meaning />
        <ChefSection chefName="Yossi Shitrit" restaurants={data} />
        <AboutUs />
        <MediaQuery minWidth={780}>
          <FooterDesktop />
        </MediaQuery>
        <MediaQuery maxWidth={780}>
          <Footer />
        </MediaQuery>
      </BrowserRouter>
    </div>
  );
}

export default App;
