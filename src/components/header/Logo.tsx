import logo from "../../assets/images/logo.png";
import "../../styles/header/header.scss";

const Logo = () => {
  return (
    <div>
      <img className="header-logo" src={logo} alt="" />
    </div>
  );
};

export default Logo;
