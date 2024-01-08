import { useEffect, useState } from "react";
import {
  CHEF_NAME,
  CHEF_PARAGRAPH,
  CHEF_RESTAURANTS,
  CHEF_WEEK,
} from "constants/variables";
import { ChefComponentProps, IRestaurant } from "constants/interfaces";
import "styles/chefSection.scss";
import MediaQuery from "react-responsive";
import Slider from "react-slick";

const ChefSection: React.FC<ChefComponentProps> = ({
  chefName,
  restaurants,
}) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState<IRestaurant[]>(
    []
  );

  const filteredRestaurantsMapped = filteredRestaurants.map((restaurant) => (
    <div className="restaurant-card" key={restaurant.id}>
      <img
        className="restaurant-image"
        src={require(`assets/images/food/${restaurant.image}`)}
        alt="restaurant_img"
      />
      <h1 className="restaurant-name">{restaurant.name_res}</h1>
    </div>
  ));

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  };

  useEffect(() => {
    const filtered = restaurants.filter(
      (restaurant) => restaurant.chef === chefName
    );
    setFilteredRestaurants(filtered);
  }, [chefName, restaurants]);

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
            <Slider {...settings}>{filteredRestaurantsMapped}</Slider>
          </MediaQuery>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
