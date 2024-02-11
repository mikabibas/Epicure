export interface ChefInfo {
  _id?: string;
  name: string;
  image?: string;
  restaurants?: string[];
  info?: string;
}

interface IRating {
  img: string;
  number: number;
}

export interface ICard {
  _id: string;
  restaurant_id?: string;
  dish_id?: number;
  dish_name?: string;
  res_image?: string;
  dish_image?: string;
  res_name?: string;
  chef: ChefInfo;
  rating: IRating;
  icon?: string;
  ingredients?: string;
  price?: number;
  opening_hours?: string;
  opening_date?: string;
}

export interface CardSliderProps {
  cards: ICard[];
}

export interface ChefComponentProps {
  chef: ChefInfo;
  restaurants: ICard[];
}

export interface Dish {
  dish_id: string;
  dish_name: string;
  ingredients: string;
  price: number;
  icon: string;
  dish_image?: string;
  restaurant: {
    id: string;
    name: string;
  };
}
