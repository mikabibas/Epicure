export interface ChefInfo {
  chef?: any;
  chef_name: string;
  chef_img: string;
}

interface IRating {
  rating_img: string;
  rating_number: number;
}

export interface ICard {
  id: number;
  restaurant_id?: number;
  dish_id?: number;
  dish_name?: string;
  res_image?: string;
  dish_image?: string;
  res_name?: string;
  chef?: ChefInfo;
  rating?: IRating;
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
