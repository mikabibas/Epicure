import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/cardSlider.scss";
import { CardSliderProps } from "constants/_interfaces";
// import Card from "./Card";

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  // const cardList = cards.map((item, index) => {
  //   return (
  //     <Card
  //       id={item.id}
  //       name_res={item.name_res}
  //       chef={item.chef}
  //       dishName={item.dishName}
  //       starRating={item.starRating}
  //       price={item.price}
  //       ingredients={item.ingredients}
  //       icon={item.icon}
  //       image={item.image}
  //     />
  //   );
  // });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="card-slider">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-image-container">
              <img
                className="card-image"
                src={require(`../assets/images/food/${card.image}`)}
                alt={card.dishName}
              />
            </div>
            <div className="card-text-container">
              <h3 className="card-title">{card.dishName}</h3>
              <img
                className="dish-icon"
                src={require(`assets/images/layout/${card.icon}`)}
                alt="dish_icon"
              />
              <p className="ingredients">{card.ingredients}</p>
              <p className="dish-price">
                <span>₪{card.price}</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
