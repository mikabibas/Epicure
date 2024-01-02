export interface Card {
  id: number;
  name_res: string;
  chef: string;
  dishName: string;
  url: string;
  location: string;
  rating: number;
}

export interface CardSliderProps {
  cards: Card[];
}
