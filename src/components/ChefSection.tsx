import { useEffect, useState } from "react";
import {
  CHEF_PARAGRAPH,
  CHEF_RESTAURANTS,
  CHEF_WEEK,
} from "constants/variables";
import { ICard, IChef } from "constants/interfaces";
import "styles/chefSection.scss";
import { fetchRestaurantById } from "store/features/restaurantSlice";
import { useAppDispatch } from "store/store";
import { useNavigate } from "react-router";

const ChefSection: React.FC<{ chef: IChef; restaurants: ICard[] }> = ({
  chef,
  restaurants,
}) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState<ICard[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCardClick = async (restaurantId: string) => {
    try {
      await dispatch(fetchRestaurantById(restaurantId) as any);
      navigate(`/restaurants/${restaurantId}`);
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    }
  };

  const filteredRestaurantsMapped = filteredRestaurants.map((restaurant) => (
    <div
      className="restaurant-card"
      key={restaurant._id}
      onClick={() => handleCardClick(restaurant._id)}
    >
      <img
        className="restaurant-image"
        src={require(`assets/images/restaurants/${restaurant.res_image}`)}
        alt="restaurant_img"
      />
      <h1 className="restaurant-name-chef">{restaurant.res_name}</h1>
    </div>
  ));
  console.log(chef.info);
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
              src={require(`assets/images/chefs/${
                chef.image || "default_chef_image.png"
              }`)}
              alt={chef.name}
            />
            <h1 className="chef-name">{chef.name}</h1>
          </div>
          <p className="chef-paragraph">{CHEF_PARAGRAPH}</p>
        </div>
        <h1 className="restaurant-title">
          {chef.name}
          {CHEF_RESTAURANTS}
        </h1>
        <div className="restaurants-container">{filteredRestaurantsMapped}</div>
      </div>
    </div>
  );
};

export default ChefSection;
