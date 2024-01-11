import { Link } from "react-router-dom";
import { CHEFS, RESTAURANTS } from "../../constants/variables";
import "../../styles/header/restaurantsChefs.scss";
import { EAppRoutes } from "constants/enum";

const RestaurantsChefs = () => {
  return (
    <div className="text2-container">
      <Link className="footer-link" to={EAppRoutes.RESTAURANTS}>
        {RESTAURANTS}
      </Link>

      <Link className="footer-link" to={EAppRoutes.CHEFS}>
        {CHEFS}
      </Link>
    </div>
  );
};

export default RestaurantsChefs;
