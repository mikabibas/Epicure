import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "components/Card";
import { CardSliderProps } from "constants/interfaces";
import { fetchRestaurantById } from "store/features/restaurantSlice";
import "styles/mappedCards.scss";
import Loader from "components/loader/Loader";
import { useAppDispatch } from "store/store";

const MappedCards: React.FC<CardSliderProps> = ({ cards }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCardClick = async (restaurantId: string) => {
    try {
      await dispatch(fetchRestaurantById(restaurantId) as any);
      navigate(`/restaurants/${restaurantId}`);
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    }
  };

  return (
    <>
      <Loader sliceName="restaurants" />
      <div className="restaurants-grid-container">
        {cards.map((card) => (
          <div key={card._id} onClick={() => handleCardClick(card._id)}>
            <Card card={card} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MappedCards;
