import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, useAppSelector } from "store/store";
import { IChefState, fetchChefs } from "store/features/chefSlice";
import { fetchDishesByRestaurantId } from "store/features/dishSlice";
import { OPEN_NOW, RES_NAV_OPTIONS } from "constants/variables";
import DishModal from "components/modal/DishModal";
import "styles/restaurants/restaurantPage.scss";
import "styles/filterNav.scss";
import "styles/loader.scss";
import { fetchRestaurantById } from "store/features/restaurantSlice";
import { ICard } from "constants/interfaces";

const RestaurantPage: React.FC = () => {
  const [selectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSide, setSelectedSide] = useState<string | null>(null);
  const [selectedChanges, setSelectedChanges] = useState<string[]>([]);
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const [loading, setLoading] = useState(true);
  const [localDishes, setLocalDishes] = useState<ICard[]>([]);

  const dispatch = useDispatch<AppDispatch>();
  const restaurantChef = useAppSelector((state) =>
    state.restaurants.restaurants.find((r) => r._id === restaurantId)
  );
  const restaurant = useAppSelector(
    (state) => state.restaurants.singleRestaurant
  );

  const chefs = useAppSelector((state) => (state.chefs as IChefState).chefs);

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

  const handleSideChange = (side: string) => {
    setSelectedSide(side);
  };

  const handleChangesChange = (changes: string[]) => {
    setSelectedChanges(changes);
  };

  useEffect(() => {
    const fetchData = async () => {
      window.scrollTo(0, 0);
      try {
        await dispatch(fetchChefs() as any);

        if (restaurantId) {
          const fetchedDishes = await dispatch(
            fetchDishesByRestaurantId(restaurantId) as any
          );
          setLocalDishes(fetchedDishes.payload || []);
          await dispatch(fetchRestaurantById(restaurantId));
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, restaurantId]);

  if (loading) {
    <div className="loader-container">
      <span className="loader"></span>
    </div>;
  }

  if (!restaurant) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
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
            {chefs.find((chef) => chef._id === restaurantChef?.chef?._id)?.name}
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
            {localDishes.map((dish) => (
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
          onSideChange={(side) => handleSideChange(side)}
          onChangesChange={(changes) => handleChangesChange(changes)}
          selectedSide={selectedSide}
          changes={selectedChanges}
        />
      )}
    </>
  );
};

export default RestaurantPage;
