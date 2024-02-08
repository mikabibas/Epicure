import { ICard } from "constants/interfaces";
import { Link } from "react-router-dom";

interface CardProps {
  card: ICard;
  linkTo?: string;
}

const Card: React.FC<CardProps> = ({ card, linkTo }) => {
  const cardContent = (
    <div className="card">
      <div className="card-image-container">
        <img
          className="card-image"
          src={require(`assets/images/restaurants/${card.res_image}`)}
          alt={card.res_name}
        />
      </div>
      <div className="card-text-container">
        <div className="restaurant-name">{card.res_name}</div>
        <h3 className="card-title">{card.chef?.name}</h3>
        <img
          className="dish-rating"
          src={require(`assets/images/layout/${card.rating?.img}`)}
          alt="dish_icon"
        />
      </div>
    </div>
  );

  return linkTo ? <Link to={linkTo}>{cardContent}</Link> : cardContent;
};

export default Card;
