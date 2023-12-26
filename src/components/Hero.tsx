import SearchIcon from "../assets/images/searchIcon.svg";
import { HERO_TEXT, PLACEHOLDER_SERACH_INPUT } from "../constants/_variables";
import "../styles/hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div>{HERO_TEXT}</div>
      <div className="search-container-desktop">
        <img className="search-icon" src={SearchIcon} alt="search_icon" />{" "}
        <input
          className="input-field"
          type="text"
          placeholder={PLACEHOLDER_SERACH_INPUT}
        />
      </div>
    </div>
  );
};

export default Hero;
