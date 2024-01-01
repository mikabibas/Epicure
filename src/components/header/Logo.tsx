import logo from "assets/images/layout/logo.png";
import "styles/header/header.scss";

const Logo = () => {
  return (
    <div>
      <img className="header-logo" src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
