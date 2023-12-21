import { useState } from "react";
import "../../../styles/header/burgerMenu.css";
import Footer from "../Footer";
import RestaurantsChefs from "../RestaurantsChefs";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <line className="br-line"></line>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
