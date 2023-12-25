import { CHEFS, RESTAURANTS } from "../../constants/variables";
import "../../styles/header/restaurantsChefs.scss";

const RestaurantsChefs = () => {
  return (
    <div className="text2-container">
      <h3>{RESTAURANTS}</h3>
      <h3>{CHEFS}</h3>
    </div>
  );
};

export default RestaurantsChefs;
