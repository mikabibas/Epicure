import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/cardSlider.scss";
import { CardSliderProps } from "constants/interfaces";
import { SIGNATURE_DISH, SLIDER_SETTINGS } from "constants/variables";

const CardDishSlider: React.FC<CardSliderProps> = ({ cards }) => {
  return (
    <div className="card-slider">
      <h1 className="restaurants-slider-title">{SIGNATURE_DISH}</h1>
      <Slider {...SLIDER_SETTINGS}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-image-container">
              <img
                className="card-image"
                src={require(`../assets/images/food/${card.image}`)}
                alt={card.dishName}
              />
            </div>
            <div className="card-text-container">
              <h3 className="card-title">{card.dishName}</h3>
              <img
                className="dish-icon"
                src={require(`assets/images/layout/${card.icon}`)}
                alt="dish_icon"
              />
              <p className="ingredients">{card.ingredients}</p>
              <p className="dish-price">
                <span>₪ {card.price}</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardDishSlider;
