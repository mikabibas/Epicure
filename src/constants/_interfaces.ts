export interface CardInterface {
  id?: number;
  image?: string;
  name_res?: string;
  dishName?: string;
  chef?: string;
  rating?: number;
  icon?: string;
  ingredients?: string;
  price?: number;
}

export interface CardSliderProps {
  cards: CardInterface[];
}
