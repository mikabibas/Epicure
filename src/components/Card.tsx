import { ICard } from "constants/interfaces";
import MediaQuery from "react-responsive";

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
        <h3 className="card-title">{card.chef?.name}</h3>
        <MediaQuery minWidth={600}>
          <img
            className="dish-rating"
            src={require(`assets/images/layout/${card.rating?.img}`)}
            alt="dish_icon"
          />
        </MediaQuery>
      </div>
    </div>
  );
};

export default Card;
