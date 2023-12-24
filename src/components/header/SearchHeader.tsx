import { useState } from "react";
import SearchIcon from "../../assets/images/searchIcon.svg";
import Cart from "../../assets/images/cart.svg";
import Profile from "../../assets/images/profile.svg";
import "../../styles/header/search.scss";

const SearchHeader: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="search-header">
      <img onClick={toggleSearch} src={SearchIcon} alt="" />
      <img src={Profile} alt="" />
      <img src={Cart} alt="" />
      {isSearchOpen && <input type="text" />}
    </div>
  );
};

export default SearchHeader;
