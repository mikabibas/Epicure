export interface CardInterface {
  id?: number;
  image?: string;
  name_res?: string;
  dishName?: string;
  chef?: string;
  rating?: string;
  icon?: string;
  ingredients?: string;
  price?: number;
}

export interface CardSliderProps {
  cards: CardInterface[];
}

export interface IRestaurant {
  id: number;
  name_res: string;
  chef: string;
  image: string;
}

export interface ChefComponentProps {
  chefName: string;
  restaurants: IRestaurant[];
}
