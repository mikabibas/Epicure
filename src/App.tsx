import "./App.scss";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Restaurants from "./pages/restaurants/Restaurants";
import Chefs from "./pages/chefs/Chefs";
import FooterDesktop from "./components/FooterDesktop";
import Hero from "./components/Hero";
import CardSlider from "./components/CardSlider";

function App() {
  const cards = [
    {
      id: 1,
      imageURL: "https://picsum.photos/600/500",
      title: "This is a title",
      rating: 5,
    },
    {
      id: 2,
      imageURL: "https://picsum.photos/600/500",
      title: "This is a second title",
      rating: 2,
    },
    {
      id: 3,
      imageURL: "https://picsum.photos/700/600",
      title: "This is a third title",
      rating: 3,
    },
    {
      id: 4,
      imageURL: "https://picsum.photos/500/400",
      title: "This is a fourth title",
      rating: 3.5,
    },
    {
      id: 5,
      imageURL: "https://picsum.photos/200/300",
      title: "This is a fifth title",
      rating: 1,
    },
    {
      id: 6,
      imageURL: "https://picsum.photos/800/700",
      title: "This is a sixth title",
      rating: 4,
    },
    {
      id: 7,
      imageURL: "https://picsum.photos/300/400",
      title: "This is a seventh title",
      rating: 4.5,
    },
  ];
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
        <h1>Card Slider</h1>
        <CardSlider cards={cards} />
        <FooterDesktop />
      </BrowserRouter>
    </div>
  );
}

export default App;
