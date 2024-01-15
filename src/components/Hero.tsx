import { useState } from "react";
import SearchIcon from "assets/images/layout/searchIcon.svg";
import { HERO_TEXT, PLACEHOLDER_SERACH_INPUT } from "constants/variables";
import "styles/hero.scss";
import data from "assets/restaurants.json";

const Hero: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="hero-container">
      <div className="hero-search-container">
        <div className="hero-text">{HERO_TEXT}</div>
        <div className="search-container-desktop">
          <img className="search-icon" src={SearchIcon} alt="search_icon" />{" "}
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="input-field"
            type="text"
            placeholder={PLACEHOLDER_SERACH_INPUT}
          />
        </div>
        {search.length > 0 && (
          <ul className="search-list">
            <li>Restaurant:</li>
            {data
              .filter((restaurant) =>
                restaurant.res_name.toLowerCase().includes(search)
              )
              .map((restaurant) => (
                <li key={restaurant.id}>{restaurant.res_name}</li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Hero;
