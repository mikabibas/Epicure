import { CardInterface } from "constants/interfaces";

interface CardProps {
  card: CardInterface;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          className="card-image"
          src={require(`assets/images/food/${card.image}`)}
          alt={card.dishName}
        />
      </div>
      <div className="card-text-container">
        <div className="restaurant-name">{card.name_res}</div>
        <h3 className="card-title">{card.chef}</h3>
        <img
          className="dish-rating"
          src={require(`assets/images/layout/${card.rating}`)}
          alt="dish_icon"
        />
      </div>
    </div>
  );
};

export default Card;
