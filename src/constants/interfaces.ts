interface ChefInfo {
  chef_name: string;
  chef_img: string;
}

export interface CardInterface {
  id?: number;
  image?: string;
  name_res?: string;
  dishName?: string;
  chef?: ChefInfo;
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
  chef: ChefInfo;
  image: string;
}

export interface ChefComponentProps {
  chef: ChefInfo;
  restaurants: IRestaurant[];
}
