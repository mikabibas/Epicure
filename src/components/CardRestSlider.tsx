import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/cardSlider.scss";
import { CardSliderProps } from "constants/_interfaces";
import { SIGNATURE_DISH } from "constants/_variables";

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    dots: false,
    arrows: false,
    initialSlide: 0,
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
      <h1 className="restaurants-slider-title">{SIGNATURE_DISH}</h1>
      <Slider {...settings}>
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
                <span>₪{card.price}</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
