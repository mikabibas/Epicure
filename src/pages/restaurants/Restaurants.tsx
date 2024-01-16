import Header from "components/header/Header";
import FilterNav from "components/restaurantsPage/FilterNav";
import MappedCards from "components/restaurantsPage/MappedCards";
import Footer from "components/Footer";
import { useAppSelector } from "store/store";

const Restaurants = () => {
  const restaurants = useAppSelector(
    (state: any) => state.restaurants.restaurants
  );

  return (
    <div>
      <Header />
      <FilterNav />
      <MappedCards cards={restaurants} />
      <Footer />
    </div>
  );
};

export default Restaurants;
