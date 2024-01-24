import { useEffect, useState } from "react";
import {
  CHEF_NAME,
  CHEF_PARAGRAPH,
  CHEF_RESTAURANTS,
  CHEF_WEEK,
  SLIDER_SETTINGS,
} from "constants/variables";
import { ChefComponentProps, ICard } from "constants/interfaces";
import "styles/chefSection.scss";
import MediaQuery from "react-responsive";
import Slider from "react-slick";

const ChefSection: React.FC<ChefComponentProps> = ({ chef, restaurants }) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState<ICard[]>([]);

  const filteredRestaurantsMapped = filteredRestaurants.map((restaurant) => (
    <div className="restaurant-card" key={restaurant.id}>
      <img
        className="restaurant-image"
        src={require(`assets/images/food/${restaurant.res_image}`)}
        alt="restaurant_img"
      />
      <h1 className="restaurant-name-chef">{restaurant.res_name}</h1>
    </div>
  ));

  useEffect(() => {
    const filtered = restaurants.filter(
      (restaurant) => restaurant.chef?.name === chef.name
    );
    setFilteredRestaurants(filtered);
  }, [chef, restaurants]);

  return (
    <div className="chef-container">
      <h1 className="chef-container-title">{CHEF_WEEK}</h1>
      <div className="second-container">
        <div className="chef-image-text-container">
          <div className="image-title-container">
            <img
              className="chef-image"
              src={require("assets/images/layout/chef-yossi.png")}
              alt="yossi_shitrit"
            />
            <h1 className="chef-name">{CHEF_NAME}</h1>
          </div>
          <p className="chef-paragraph">{CHEF_PARAGRAPH}</p>
        </div>
        <h1 className="restaurant-title">{CHEF_RESTAURANTS}</h1>
        <div className="restaurants-container">
          <MediaQuery minWidth={780}>{filteredRestaurantsMapped}</MediaQuery>
          <MediaQuery maxWidth={780}>
            <Slider {...SLIDER_SETTINGS}>{filteredRestaurantsMapped}</Slider>
          </MediaQuery>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
