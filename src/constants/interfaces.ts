export interface ChefInfo {
  chef?: any;
  chef_name: string;
  chef_img: string;
}

export interface ICard {
  id?: number;
  restaurant_id?: number;
  dish_id?: number;
  dish_name?: string;
  res_image?: string;
  dish_image?: string;
  res_name?: string;
  chef?: ChefInfo;
  rating?: string;
  icon?: string;
  ingredients?: string;
  price?: number;
}

export interface CardSliderProps {
  cards: ICard[];
}

export interface ChefComponentProps {
  chef: ChefInfo;
  restaurants: ICard[];
}
