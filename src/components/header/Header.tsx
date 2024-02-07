import BurgerMenu from "./BurgerMenu";
import "styles/header/header.scss";
import Logo from "./Logo";
import logo from "assets/images/layout/logo.png";
import { useState, useEffect, useRef, useCallback } from "react";
import Cart from "components/header/Cart";
import Profile from "assets/images/layout/profile.svg";
import SearchIcon from "assets/images/layout/searchIcon.svg";
import { CHEFS, RESTAURANTS, TEXT_LOGO } from "constants/variables";
import { Link } from "react-router-dom";
import { EAppRoutes } from "constants/enum";
import MediaQuery from "react-responsive";
import SearchField from "./SearchField";
import { useAppSelector } from "store/store";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useAppSelector((state) => state.cart);

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const cartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentMouseDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Check if the click is outside the cart container
      if (
        isCartOpen &&
        cartContainerRef.current &&
        !cartContainerRef.current.contains(target)
      ) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleDocumentMouseDown);
    };
  }, [isCartOpen]);

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
          <div
            className="cart-header-container"
            id="cart-container"
            ref={cartContainerRef}
          >
            {cart.items.length > 0 && (
              <div className="cart-badge">{cart.items.length}</div>
            )}
            <div onClick={toggleCart} className="cart-icon">
              <img
                src={require(`assets/images/layout/cart.jpg`)}
                alt="cart_btn"
              />
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
