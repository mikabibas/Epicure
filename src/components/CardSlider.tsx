import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/cardSlider.scss";
import { CardSliderProps } from "constants/_interfaces";

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-image-container">
              <img
                src={require(`../assets/images/food/${card.url}`)}
                alt={card.dishName}
              />
            </div>
            <h3 className="card-title">{card.dishName}</h3>
            <div className="card-rating"> {card.rating}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
