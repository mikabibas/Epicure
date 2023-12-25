import React from "react";

interface Dish {
  id: number;
  name_res: string;
  chef: string;
  top_dishes: { dish: string; url: string }[];
}

interface DishCardProps {
  dish: Dish;
}

const Card: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <div className="card">
      <h2>{dish.name_res}</h2>
      <p>Chef: {dish.chef}</p>
      <ul>
        {dish.top_dishes.map((topDish, index) => (
          <li key={index}>
            <a href={topDish.url} target="_blank" rel="noopener noreferrer">
              {topDish.dish}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
