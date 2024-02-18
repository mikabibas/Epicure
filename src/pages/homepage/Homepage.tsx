import Hero from "components/Hero";
import restaurantsData from "assets/restaurants.json";
import Meaning from "components/Meaning";
import ChefSection from "components/ChefSection";
import AboutUs from "components/AboutUs";
import CardDishSlider from "components/CardDishSlider";
import CardRestSlider from "components/CardRestSlider";
import Loader from "components/loader/Loader";
import { IChef } from "constants/interfaces";

const Homepage = () => {
  const chefData: IChef = {
    name: "Yossi Shitrit",
    image: "yossiShitrit.png",
  };

  return (
    <div>
      <Loader />
      <Hero />
      <CardRestSlider />
      <CardDishSlider />
      <Meaning />
      <ChefSection chef={chefData} restaurants={restaurantsData} />
      <AboutUs />
    </div>
  );
};

export default Homepage;
