import Hero from "components/Hero";
import data from "assets/restaurants.json";
import CardDishSlider from "components/CardRestSlider";
import Meaning from "components/Meaning";
import ChefSection from "components/ChefSection";
import CardRestSlider from "components/CardDishSlider";
import AboutUs from "components/AboutUs";
import Footer from "components/Footer";
import Header from "components/header/Header";
import { CHEF_NAME } from "constants/variables";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CardDishSlider cards={data} />
      <CardRestSlider cards={data} />
      <Meaning />
      <ChefSection
        chef={{ chef_name: CHEF_NAME, chef_img: "chef_yossi.png" }}
        restaurants={data}
      />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Homepage;
