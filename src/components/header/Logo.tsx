import logo from "../../assets/images/logo.png";
import "../../styles/header/search.scss";

const Logo = () => {
  return (
    <div>
      <img className="headerLogo" src={logo} alt="" />
    </div>
  );
};

export default Logo;
