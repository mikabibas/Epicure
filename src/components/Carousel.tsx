import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import Card from "./card/Card";

interface Dish {
  id: number;
  name_res: string;
  chef: string;
  top_dishes: { dish: string; url: string }[];
}

const CardCarousel: React.FC = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("src/restaurants.json");
        setDishes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="card-carousel">
      <Slider {...settings}>
        {dishes.map((dish) => (
          <Card key={dish.id} dish={dish} />
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
