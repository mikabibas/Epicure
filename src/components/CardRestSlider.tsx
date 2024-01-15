import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/cardSlider.scss";
import { fetchRestaurants } from "store/features/restaurantSlice";
import Card from "./Card";
import { EAppRoutes } from "constants/enum";
import {
  RESTAURANTS,
  POPULAR_RESTAURANTS,
  SLIDER_SETTINGS,
} from "constants/variables";
import { Link } from "react-router-dom";
import { useAppSelector } from "store/store";
import { ICard } from "constants/interfaces";

const CardRestSlider: React.FC = () => {
  const dispatch = useDispatch();
  const restaurants = useAppSelector(
    (state: any) => state.restaurants.restaurants
  );
  const status = useAppSelector((state: any) => state.restaurants.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRestaurants() as any);
    }
  }, [status, dispatch]);

  return (
    <div className="card-slider">
      <h1 className="restaurants-slider-title">{POPULAR_RESTAURANTS}</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading restaurants</p>}
      {status === "succeeded" && (
        <Slider {...SLIDER_SETTINGS}>
          {restaurants.map((card: ICard) => (
            <Card key={card.id} card={card} />
          ))}
        </Slider>
      )}
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
