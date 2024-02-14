export interface IChef {
  _id?: string;
  name: string;
  image?: string;
  rating?: number;
  date_added?: string;
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
  chef: IChef;
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
  chef: IChef;
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

interface RestaurantArrDish {
  id: string;
  name: string;
}

export interface CartItem {
  dish: {
    dish_id: string;
    dish_image: string;
    dish_name: string;
    ingredients: string;
    price: number;
    icon: string;
    restaurant: RestaurantArrDish;
  };
  quantity: number;
}

export interface DishModalProps {
  selectedDish: {
    dish_id: string;
    dish_image: string;
    dish_name: string;
    ingredients: string;
    price: number;
    icon: string;
    restaurant: RestaurantArrDish;
  } | null;
  quantity: number;
  onClose: () => void;
  onQuantityChange: (value: number) => void;
  onSideChange: (value: string) => void;
  onChangesChange: (values: string[]) => void;
  selectedSide: string | null;
  changes: string[];
}
