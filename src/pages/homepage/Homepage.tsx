import Hero from "components/Hero";
import restaurantsData from "assets/restaurants.json";
import Meaning from "components/Meaning";
import ChefSection from "components/ChefSection";
import AboutUs from "components/AboutUs";
import Footer from "components/Footer";
import Header from "components/header/Header";
import { CHEF_NAME } from "constants/variables";
import CardDishSlider from "components/CardDishSlider";
import CardRestSlider from "components/CardRestSlider";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CardRestSlider />
      <CardDishSlider />
      <Meaning />
      <ChefSection
        chef={{ name: CHEF_NAME, img: "chef_yossi.png" }}
        restaurants={restaurantsData}
      />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Homepage;
