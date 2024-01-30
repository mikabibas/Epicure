import FilterNav from "components/restaurantsPage/FilterNav";
import MappedCards from "components/restaurantsPage/MappedCards";
import { useAppSelector } from "store/store";

const Restaurants = () => {
  const restaurants = useAppSelector(
    (state: any) => state.restaurants.restaurants
  );

  return (
    <div>
      <FilterNav />
      <MappedCards cards={restaurants} />
    </div>
  );
};

export default Restaurants;
