import React from "react";
import { Link } from "react-router-dom";
import Card from "components/Card";
import { CardSliderProps } from "constants/interfaces";
import "styles/mappedCards.scss";

const MappedCards: React.FC<CardSliderProps> = ({ cards }) => {
  return (
    <div className="restaurants-grid-container">
      {cards.map((card) => (
        <Link to={`/restaurants/${card._id}`} key={card._id}>
          <Card card={card} />
        </Link>
      ))}
    </div>
  );
};

export default MappedCards;
