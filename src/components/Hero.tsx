import React from "react";
import { HERO_TEXT, NO_RESTAURANT_FOUND_TEXT } from "constants/variables";
import "styles/hero.scss";
import { selectSearch } from "store/features/searchSlice";
import SearchField from "./header/SearchField";
import { Link } from "react-router-dom";
import { useAppSelector } from "store/store";

const Hero: React.FC = () => {
  const search = useAppSelector(selectSearch);
  const restaurants = useAppSelector((state) => state.restaurants.restaurants);

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.res_name &&
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
