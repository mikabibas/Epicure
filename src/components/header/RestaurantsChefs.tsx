import { Link } from "react-router-dom";
import { CHEFS, RESTAURANTS } from "constants/variables";
import "styles/header/restaurantsChefs.scss";
import { EAppRoutes } from "constants/enum";

interface RestaurantsChefsProps {
  closeMenu: () => void;
}

const RestaurantsChefs: React.FC<RestaurantsChefsProps> = ({ closeMenu }) => {
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div className="text2-container">
      <Link
        className="footer-link"
        to={EAppRoutes.RESTAURANTS}
        onClick={handleLinkClick}
      >
        {RESTAURANTS}
      </Link>

      <Link
        className="footer-link"
        to={EAppRoutes.CHEFS}
        onClick={handleLinkClick}
      >
        {CHEFS}
      </Link>
    </div>
  );
};

export default RestaurantsChefs;
