import BurgerMenu from "./BurgerMenu";
import "styles/header/header.scss";
import Logo from "./Logo";
import logo from "assets/images/layout/logo.png";
import { useState } from "react";
import Cart from "assets/images/layout/cart.svg";
import Profile from "assets/images/layout/profile.svg";
import SearchIcon from "assets/images/layout/searchIcon.svg";

import { CHEFS, RESTAURANTS, TEXT_LOGO } from "constants/variables";
import { Link } from "react-router-dom";
import { EAppRoutes } from "constants/enum";
import MediaQuery from "react-responsive";
import SearchField from "./SearchField";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  const isActiveRoute = (route: EAppRoutes) => {
    return window.location.pathname === route;
  };

  return (
    <div className="header-navbar-container">
      <div className="header-container">
        <BurgerMenu />
        <div className="logo-container">
          <MediaQuery maxWidth={780}>
            {isSearchOpen ? "Search" : <Logo src={logo} size={32} />}
          </MediaQuery>
          <MediaQuery minWidth={780}>
            <Logo src={logo} size={32} />
          </MediaQuery>
          <div className="logo-text">{TEXT_LOGO}</div>
          <div className="restaurants-chefs-container">
            <Link
              className={`link ${
                isActiveRoute(EAppRoutes.RESTAURANTS) ? "active" : ""
              }`}
              to={EAppRoutes.RESTAURANTS}
            >
              {RESTAURANTS}
            </Link>
            <Link
              className={`link ${
                isActiveRoute(EAppRoutes.CHEFS) ? "active" : ""
              }`}
              to={EAppRoutes.CHEFS}
            >
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
            {isSearchOpen && <SearchField />}
          </div>
          <img onClick={toggleSearch} src={SearchIcon} alt="search_btn" />
          <img src={Profile} alt="profile_btn" />
          <img src={Cart} alt="cart_btn" />
        </div>
      </div>
      <div className={isSearchOpen ? "search-bigger-container" : ""}>
        <div
          className={isSearchOpen ? "input-search-field-container-mobile" : ""}
        >
          {isSearchOpen && <SearchField />}
        </div>
      </div>
    </div>
  );
};

export default Header;
