import { useState } from "react";
import "../../styles/header/burgerMenu.scss";
import Footer from "../Footer";
import RestaurantsChefs from "./RestaurantsChefs";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="menu-items">
            <RestaurantsChefs />
            <div className="br-line"></div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
