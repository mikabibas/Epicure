import BurgerMenu from "./BurgerMenu";
import "styles/header/header.scss";
import Logo from "./Logo";
import { useState } from "react";
import SearchIcon from "assets/images/layout/searchIcon.svg";
import Cart from "assets/images/layout/cart.svg";
import Profile from "assets/images/layout/profile.svg";
import {
  CHEFS,
  PLACEHOLDER_SERACH_INPUT,
  RESTAURANTS,
  TEXT_LOGO,
} from "constants/variables";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };
  return (
    <div className="header-navbar-container">
      <div className="header-container">
        <BurgerMenu />
        <div className="logo-container">
          {isSearchOpen ? "Search" : <Logo />}
          <div className="logo-text">{TEXT_LOGO}</div>
          <div className="restaurants-chefs-container">
            <Link className="link" to="/restaurants">
              {RESTAURANTS}
            </Link>
            <Link className="link" to="/chefs">
              {CHEFS}
            </Link>
          </div>
        </div>
        <div className="navbar-header">
          <div
            className={
              isSearchOpen ? "input-search-field-container-desktop" : ""
            }
          >
            {isSearchOpen && (
              <div className="search-container">
                <img
                  className="search-icon"
                  src={SearchIcon}
                  alt="search_icon"
                />{" "}
                <input
                  className="input-field"
                  type="text"
                  placeholder={PLACEHOLDER_SERACH_INPUT}
                />
              </div>
            )}
          </div>
          <img onClick={toggleSearch} src={SearchIcon} alt="search_btn" />
          <img src={Profile} alt="profile_btn" />
          <img src={Cart} alt="cart_btn" />
        </div>
      </div>
      <div
        className={isSearchOpen ? "input-search-field-container-mobile" : ""}
      >
        {isSearchOpen && (
          <div className="search-container">
            <img className="search-icon" src={SearchIcon} alt="search_icon" />{" "}
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
