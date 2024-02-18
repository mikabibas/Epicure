import ChefList from "components/chefsPage/ChefList";
import Loader from "components/loader/Loader";
import FilterNav from "components/restaurantsPage/FilterNav";
import { CHEFS } from "constants/variables";
import "styles/restaurants/restaurantPage.scss";

const Chefs = () => {
  return (
    <div>
      <Loader sliceName="chefs" />
      <h1 className="page-title">{CHEFS}</h1>
      <FilterNav context="chef" />
      <ChefList />
    </div>
  );
};

export default Chefs;
