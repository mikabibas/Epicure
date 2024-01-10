import Header from "components/header/Header";
import FilterNav from "components/restaurantsPage/FilterNav";
import MappedCards from "components/restaurantsPage/MappedCards";
import data from "assets/restaurants.json";
import Footer from "components/Footer";

const Restaurants = () => {
  return (
    <div>
      <Header />
      <FilterNav />
      <MappedCards cards={data} />
      <Footer />
    </div>
  );
};

export default Restaurants;
