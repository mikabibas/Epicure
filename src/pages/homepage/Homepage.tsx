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
      <MediaQuery minWidth={780}>
        <FooterDesktop />
      </MediaQuery>
      <MediaQuery maxWidth={780}>
        <Footer />
      </MediaQuery>
    </div>
  );
};

export default Homepage;
