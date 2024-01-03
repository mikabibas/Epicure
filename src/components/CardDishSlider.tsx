import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/cardSlider.scss";
import { CardSliderProps } from "constants/_interfaces";
import { Link } from "react-router-dom";
import { RESTAURANTS, POPULAR_RESTAURANTS } from "constants/_variables";

const CardDishSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-slider">
      <h1 className="restaurants-slider-title">{POPULAR_RESTAURANTS}</h1>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-image-container">
              <img
                className="card-image"
                src={require(`assets/images/food/${card.image}`)}
                alt={card.dishName}
              />
            </div>
            <div className="card-text-container">
              <h3 className="card-title">{card.chef}</h3>
              <img
                className="dish-rating"
                src={require(`assets/images/layout/${card.rating}`)}
                alt="dish_icon"
              />
            </div>
          </div>
        ))}
      </Slider>
      <Link className="slider-link" to="/restaurants">
        All {RESTAURANTS}
        <img
          className="arrows-link"
          src={require("assets/images/layout/arrows.jpg")}
          alt="arrows"
        />
      </Link>
    </div>
  );
};

export default CardDishSlider;
