import ChefList from "components/chefsPage/ChefList";
import Loader from "components/loader/Loader";
import FilterNav from "components/restaurantsPage/FilterNav";

const Chefs = () => {
  return (
    <div>
      <Loader sliceName="chefs" />
      <FilterNav />
      <ChefList />
    </div>
  );
};

export default Chefs;
