import Hero from "components/Hero";
import data from "assets/restaurants.json";
import CardDishSlider from "components/CardDishSlider";
import Meaning from "components/Meaning";
import ChefSection from "components/ChefSection";
import CardRestSlider from "components/CardRestSlider";
import AboutUs from "components/AboutUs";
import Footer from "components/Footer";
import Header from "components/header/Header";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CardDishSlider cards={data} />
      <CardRestSlider cards={data} />
      <Meaning />
      <ChefSection chefName="Yossi Shitrit" restaurants={data} />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Homepage;
