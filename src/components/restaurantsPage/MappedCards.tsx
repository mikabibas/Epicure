import Card from "components/Card";
import { CardSliderProps } from "constants/interfaces";
import "styles/mappedCards.scss";

const MappedCards: React.FC<CardSliderProps> = ({ cards }) => {
  return (
    <div className="restaurants-grid-container">
      {cards.map((card) => (
        <Card key={card._id} card={card} />
      ))}
    </div>
  );
};
export default MappedCards;
