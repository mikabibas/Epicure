import ChefList from "components/ChefList";
import Footer from "components/Footer";
import Header from "components/header/Header";
import FilterNav from "components/restaurantsPage/FilterNav";

const Chefs = () => {
  return (
    <div>
      <Header />
      <FilterNav />
      <ChefList />
      <Footer />
    </div>
  );
};

export default Chefs;
