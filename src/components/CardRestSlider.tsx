import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/cardSlider.scss";
import { CardSliderProps } from "constants/interfaces";
import { Link } from "react-router-dom";
import {
  RESTAURANTS,
  POPULAR_RESTAURANTS,
  SLIDER_SETTINGS,
} from "constants/variables";
import Card from "./Card";
import { EAppRoutes } from "constants/enum";

const CardRestSlider: React.FC<CardSliderProps> = ({ cards }) => {
  return (
    <div className="card-slider">
      <h1 className="restaurants-slider-title">{POPULAR_RESTAURANTS}</h1>
      <Slider {...SLIDER_SETTINGS}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </Slider>
      <Link className="slider-link" to={EAppRoutes.RESTAURANTS}>
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

export default CardRestSlider;
