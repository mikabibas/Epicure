import { ICard } from "constants/interfaces";

interface CardProps {
  card: ICard;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          className="card-image"
          src={require(`assets/images/food/${card.res_image}`)}
          alt={card.res_name}
        />
      </div>
      <div className="card-text-container">
        <div className="restaurant-name">{card.res_name}</div>
        <h3 className="card-title">{card.chef?.chef_name}</h3>
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
