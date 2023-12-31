import { useState } from "react";
import SearchIcon from "../assets/images/searchIcon.svg";
import { HERO_TEXT, PLACEHOLDER_SERACH_INPUT } from "../constants/_variables";
import "../styles/hero.scss";
import data from "../restaurants.json";

const Hero: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="hero-container">
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
              restaurant.name_res.toLowerCase().includes(search)
            )
            .map((restaurant) => (
              <li key={restaurant.id}>{restaurant.name_res}</li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Hero;
