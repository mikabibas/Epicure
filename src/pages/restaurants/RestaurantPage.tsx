import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppSelector } from "store/store";
import { fetchChefs, IChefState } from "store/features/chefSlice";
import { fetchDishes, IDishState } from "store/features/dishSlice";
import "styles/cardSlider.scss";
import "styles/restaurants/restaurantPage.scss";
import Header from "components/header/Header";
import Footer from "components/Footer";
import { OPEN_NOW } from "constants/variables";

const RestaurantPage: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChefs() as any);
    dispatch(fetchDishes() as any);
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
      <Header />
      <div className="rest-container">
        <div className="rest-hero">
          <img
            src={require(`assets/images/restaurants/${restaurant.res_image}`)}
            alt="Restaurant Hero"
          />
        </div>
        <h1 className="rest-name">{restaurant.res_name}</h1>
        <h2 className="rest-chef-name">
          {chefs.find((chef) => chef.id === restaurant.chef?.id)?.name}
        </h2>
        <div className="open-now-container">
          <img
            className="clock-icon"
            src={require("../../assets/images/layout/clock-icon1.png")}
            alt="clock-icon"
          />
          <p className="open-now">{OPEN_NOW}</p>
        </div>
        <div>
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
        </div>
        <div className="rest-dish-container">
          {dishes
            .filter((dish) => dish.restaurant_id === restaurantId)
            .map((dish) => (
              <div key={dish.dish_id} className="card-dish">
                <div className="card-image-container-dish">
                  <img
                    className="card-image-dish"
                    src={require(`../../assets/images/food/${dish.dish_image}`)}
                    alt={dish.dish_name}
                  />
                </div>
                <div className="card-text-container-dish">
                  <h3 className="restaurant-name">{dish.dish_name}</h3>
                  <img
                    className="dish-icon"
                    src={require(`assets/images/layout/${dish.icon}`)}
                    alt="dish_icon"
                  />
                  <p className="card-title">{dish.ingredients}</p>
                  <p className="dish-price">
                    <span>₪ {dish.price}</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RestaurantPage;
