import BurgerMenu from "./BurgerMenu";
import "../../styles/header/header.scss";
import Logo from "./Logo";
import { useState } from "react";
import SearchIcon from "../../assets/images/searchIcon.svg";
import Cart from "../../assets/images/cart.svg";
import Profile from "../../assets/images/profile.svg";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div className="headerNavbarContainer">
      <div className="header-container">
        <BurgerMenu />
        <div>{isSearchOpen ? "Search" : <Logo />}</div>
        <div className="navbar-header">
          <img onClick={toggleSearch} src={SearchIcon} alt="" />
          <img src={Profile} alt="" />
          <img src={Cart} alt="" />
        </div>
      </div>
      <div className={isSearchOpen ? "inputSearchFieldContainer" : ""}>
        {isSearchOpen && (
          <div>
            <img src={SearchIcon} alt="" />{" "}
            <input className="inputField" type="text" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
