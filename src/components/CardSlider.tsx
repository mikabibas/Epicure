import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/cardSlider.scss";

interface Card {
  id: number;
  name_res: string;
  chef: string;
  top_dishes: { dish: string; url: string }[];
  location: string;
  rating: number;
}

interface CardSliderProps {
  cards: Card[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="card-slider">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img
              src={card.top_dishes[1].url}
              alt={card.top_dishes[1].dish}
              className="card-image"
            />
            <h3 className="card-title">{card.top_dishes[1].dish}</h3>
            <div className="card-rating"> {card.rating}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
