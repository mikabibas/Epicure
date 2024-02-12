import Hero from "components/Hero";
import restaurantsData from "assets/restaurants.json";
import Meaning from "components/Meaning";
import ChefSection from "components/ChefSection";
import AboutUs from "components/AboutUs";
import { CHEF_NAME } from "constants/variables";
import CardDishSlider from "components/CardDishSlider";
import CardRestSlider from "components/CardRestSlider";
import Loader from "components/loader/Loader";

const Homepage = () => {
  return (
    <div>
      <Loader />
      <Hero />
      <CardRestSlider />
      <CardDishSlider />
      <Meaning />
      <ChefSection
        chef={{ name: CHEF_NAME, image: "chef_yossi.png" }}
        restaurants={restaurantsData}
      />
      <AboutUs />
    </div>
  );
};

export default Homepage;
