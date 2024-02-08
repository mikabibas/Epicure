import React from "react";
import { useSelector } from "react-redux";
import { HERO_TEXT, NO_RESTAURANT_FOUND_TEXT } from "constants/variables";
import "styles/hero.scss";
import data from "assets/restaurants.json";
import { selectSearch } from "store/features/searchSlice";
import SearchField from "./header/SearchField";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const search = useSelector(selectSearch);

  const filteredRestaurants = data.filter((restaurant) =>
    restaurant.res_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="hero-container">
      <div className="hero-search-container">
        <div className="hero-text">{HERO_TEXT}</div>
        <SearchField className={"search-container-desktop"} />
        {search.length > 0 && (
          <ul className="search-list">
            {filteredRestaurants.length > 0 && <li>Restaurants:</li>}
            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((restaurant) => (
                <li className="search-result-item" key={restaurant._id}>
                  <Link to={`/restaurants/${restaurant._id}`}>
                    {restaurant.res_name}
                  </Link>
                </li>
              ))
            ) : (
              <li>{NO_RESTAURANT_FOUND_TEXT}</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Hero;
