import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppSelector } from "store/store";
import { fetchChefs, IChefState } from "store/features/chefSlice";
import { fetchDishes, IDishState } from "store/features/dishSlice";
import { OPEN_NOW, RES_NAV_OPTIONS } from "constants/variables";
import DishModal from "components/Modal/DishModal";
import "styles/restaurants/restaurantPage.scss";
import "styles/filterNav.scss";

const RestaurantPage: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const getCheckedClass = (option: string) => {
    return selectedOption === option ? "checked" : "";
  };

  const handleDishClick = (dish: any) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  useEffect(() => {
    dispatch(fetchChefs() as any);
    dispatch(fetchDishes() as any);
    window.scrollTo(0, 0);
  }, [dispatch]);

  const restaurant = useAppSelector((state) =>
    state.restaurants.restaurants.find((r) => r._id === restaurantId)
  );
  const chefs = useAppSelector((state) => (state.chefs as IChefState).chefs);
  const dishes = useAppSelector((state) => (state.dishes as IDishState).dishes);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <>
      <div className="rest-container">
        <div className="rest-hero">
          <img
            className="rest-hero-image"
            src={require(`assets/images/restaurants/${restaurant.res_image}`)}
            alt="Restaurant Hero"
          />
        </div>
        <div className="rest-container">
          <h1 className="rest-name">{restaurant.res_name}</h1>
          <h2 className="rest-chef-name">
            {chefs.find((chef) => chef._id === restaurant.chef?._id)?.name}
          </h2>
          <div className="open-now-container">
            <img
              className="clock-icon"
              src={require("../../assets/images/layout/clock-icon1.png")}
              alt="clock-icon"
            />
            <p className="open-now">{OPEN_NOW}</p>
          </div>
          <div className="navigation-menu restaurant-nav">
            {RES_NAV_OPTIONS.map((option: string) => (
              <div key={option}>
                <input
                  type="radio"
                  id={option}
                  name="radioGroup"
                  value={option}
                  checked={selectedOption === option}
                  className="nav-item"
                />
                <label
                  className={`nav-item rest-page ${getCheckedClass(option)}`}
                  htmlFor={option}
                >
                  {option === "Most Popular" ? "Most Viewed" : option}
                </label>
              </div>
            ))}
          </div>
          <div className="rest-dish-container">
            {dishes
              .filter((dish) => dish.restaurant_id === restaurantId)
              .map((dish) => (
                <div
                  key={dish.dish_id}
                  className="card-dish-restaurant-page"
                  onClick={() => handleDishClick(dish)}
                >
                  <div className="card-image-container-dish-restaurant-page">
                    <img
                      className="card-image-dish-restaurant-page"
                      src={require(`../../assets/images/food/${dish.dish_image}`)}
                      alt={dish.dish_name}
                    />
                  </div>
                  <div className="card-text-container-dish-restaurant-page">
                    <h3 className="restaurant-name-restaurant-page">
                      {dish.dish_name}
                    </h3>
                    <p className="card-title-restaurant-page">
                      {dish.ingredients}
                    </p>
                    <p className="dish-price">
                      <span>₪ {dish.price}</span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <DishModal
          selectedDish={selectedDish}
          quantity={quantity}
          onClose={() => setIsModalOpen(false)}
          onQuantityChange={handleQuantityChange}
        />
      )}
    </>
  );
};

export default RestaurantPage;
