import { CardInterface } from "constants/_interfaces";
import "styles/card.scss";

const Card = ({
  id,
  image,
  name_res,
  dishName,
  chef,
  rating,
  icon,
  ingredients,
  price,
}: CardInterface) => {
  return (
    <div className="card-container">
      {image && <img src={image} alt="card_image" className="image" />}
      <div className="card-layout">
        {name_res ? (
          <div>
            <h1 className="name_title">{name_res}</h1>
            <p className="chef">{chef}</p>
            <span>{rating}</span>
          </div>
        ) : (
          <div className="card-layout">
            <h1 className="name_title">{dishName}</h1>
            <span className="icon">{icon}</span>
            <p className="ingredients">{ingredients}</p>
            <p className="price">{price}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
