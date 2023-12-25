import BurgerMenu from "./BurgerMenu";
import "../../styles/header/header.scss";
import Logo from "./Logo";
import { useState } from "react";
import SearchIcon from "../../assets/images/searchIcon.svg";
import Cart from "../../assets/images/cart.svg";
import Profile from "../../assets/images/profile.svg";
import { PLACEHOLDER_SERACH_INPUT } from "../../constants/variables";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };
  return (
    <div className="header-navbar-container">
      <div className="header-container">
        <BurgerMenu />
        <div>{isSearchOpen ? "Search" : <Logo />}</div>
        <div className="navbar-header">
          <img onClick={toggleSearch} src={SearchIcon} alt="" />
          <img src={Profile} alt="" />
          <img src={Cart} alt="" />
        </div>
      </div>
      <div className={isSearchOpen ? "input-search-field-container" : ""}>
        {isSearchOpen && (
          <div>
            <img src={SearchIcon} alt="" />{" "}
            <input
              className="input-field"
              type="text"
              placeholder={PLACEHOLDER_SERACH_INPUT}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
