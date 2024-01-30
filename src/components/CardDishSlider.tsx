import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/cardSlider.scss";
import { ICard } from "constants/interfaces";
import { SIGNATURE_DISH, SLIDER_SETTINGS } from "constants/variables";
import { fetchDishes } from "store/features/dishSlice";

const CardDishSlider: React.FC = () => {
  const dispatch = useDispatch();
  const dishes = useSelector((state: any) => state.dishes.dishes);
  const status = useSelector((state: any) => state.dishes.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDishes() as any);
    }
  }, [status, dispatch]);

  return (
    <div className="card-slider">
      <h1 className="restaurants-slider-title">{SIGNATURE_DISH}</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading dishes</p>}
      {status === "succeeded" && (
        <Slider {...SLIDER_SETTINGS}>
          {dishes.map((card: ICard) => (
            <div key={card._id} className="card-dish">
              <div className="card-image-container-dish">
                <img
                  className="card-image-dish"
                  src={require(`../assets/images/food/${card.dish_image}`)}
                  alt={card.dish_name}
                />
              </div>
              <div className="card-text-container-dish">
                <h3 className="restaurant-name">{card.dish_name}</h3>
                <img
                  className="dish-icon"
                  src={require(`assets/images/layout/${card.icon}`)}
                  alt="dish_icon"
                />
                <p className="card-title">{card.ingredients}</p>
                <p className="dish-price">
                  <span>₪ {card.price}</span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CardDishSlider;
