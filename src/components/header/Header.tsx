import BurgerMenu from "./BurgerMenu";
import "styles/header/header.scss";
import Logo from "./Logo";
import logo from "assets/images/layout/logo.png";
import { useEffect, useRef, useState } from "react";
import Cart from "components/header/Cart";
import Profile from "assets/images/layout/profile.svg";
import SearchIcon from "assets/images/layout/searchIcon.svg";
import CartIcon from "assets/images/layout/cart.svg";
import { CHEFS, RESTAURANTS, TEXT_LOGO } from "constants/variables";
import { Link } from "react-router-dom";
import { EAppRoutes } from "constants/enum";
import MediaQuery from "react-responsive";
import SearchField from "./SearchField";
import { useAppSelector } from "store/store";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartRef = useRef<HTMLDivElement | null>(null);
  const cart = useAppSelector((state) => state.cart);

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const closeCartIfOutsideClick = (event: React.MouseEvent<Document>) => {
    if (
      cartRef.current &&
      event.target instanceof Node &&
      !cartRef.current.contains(event.target)
    ) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener("click", closeCartIfOutsideClick as any);
    }

    return () => {
      document.removeEventListener("click", closeCartIfOutsideClick as any);
    };
  });

  const isActiveRoute = (route: EAppRoutes) => {
    return window.location.pathname === route;
  };

  return (
    <div className="header-navbar-container">
      <div className="header-container" ref={cartRef}>
        <BurgerMenu />
        <div className="logo-container">
          <MediaQuery maxWidth={780}>
            {isSearchOpen ? "Search" : <Logo src={logo} size={32} />}
          </MediaQuery>
          <MediaQuery minWidth={780}>
            <Logo src={logo} size={32} />
          </MediaQuery>
          <Link to={EAppRoutes.HOMEPAGE} className="logo-text">
            {TEXT_LOGO}
          </Link>
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
            {isSearchOpen && (
              <SearchField
                iconSize={24}
                className={"search-container-mobile"}
              />
            )}
          </div>
          <img onClick={toggleSearch} src={SearchIcon} alt="search_btn" />
          <img className="profile_btn" src={Profile} alt="profile_btn" />
          <div className="cart-header-container">
            {cart.items.length > 0 && (
              <div className="cart-badge">{cart.items.length}</div>
            )}
            <div onClick={toggleCart} className="cart-icon">
              <img src={CartIcon} alt="cart_icon" />
            </div>
          </div>
        </div>
        {isCartOpen && <Cart />}
      </div>
      <div className={isSearchOpen ? "search-bigger-container" : ""}>
        <div
          className={isSearchOpen ? "input-search-field-container-mobile" : ""}
        >
          {isSearchOpen && (
            <SearchField iconSize={24} className={"search-container-mobile"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
