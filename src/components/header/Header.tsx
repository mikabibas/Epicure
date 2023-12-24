import BurgerMenu from "./BurgerMenu";
import "../../styles/header/header.scss";
import SearchHeader from "./SearchHeader";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header-container">
      <BurgerMenu />
      <Logo />
      <SearchHeader />
    </div>
  );
};

export default Header;
