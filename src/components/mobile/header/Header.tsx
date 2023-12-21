import BurgerMenu from "./BurgerMenu";
import "../../../styles/header/header.scss";
import SearchHeader from "./SearchHeader";

const Header = () => {
  return (
    <div className="header-container">
      <BurgerMenu />
      <SearchHeader />
    </div>
  );
};

export default Header;
