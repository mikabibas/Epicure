import logo from "../../assets/images/logo.png";
import "../../styles/header/header.scss";

const Logo = () => {
  return (
    <div>
      <img className="headerLogo" src={logo} alt="" />
    </div>
  );
};

export default Logo;
