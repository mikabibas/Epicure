import restaurants from "assets/restaurants.json";
import { ICard } from "constants/interfaces";

export interface IFilterBy {
  isNew?: boolean;
  isPopular?: boolean;
  isOpen?: boolean;
}

const query = (filterBy: IFilterBy) => {
  let filteredRestaurants = restaurants as ICard[];

  function filterByOpeningDate(restaurants: ICard[], years: number) {
    const currentDate = new Date();
    const twoYearsAgo = new Date(
      currentDate.getFullYear() - years,
      currentDate.getMonth(),
      currentDate.getDate()
    );

    return restaurants.filter((restaurant: any) => {
      const openingDate = new Date(restaurant.opening_date);
      return openingDate >= twoYearsAgo;
    });
  }

  function filterTopRated(restaurants: any) {
    return restaurants.filter(
      (restaurant: any) => restaurant.rating.rating_number >= 4
    );
  }

  function filterByOpeningHours(
    restaurants: ICard[],
    startHour: number,
    endHour: number
  ) {
    return restaurants.filter((restaurant: any) => {
      const openingHours = restaurant.opening_hours.split(" - ");
      const startTime = parseInt(openingHours[0].split(":")[0], 10);
      const endTime = parseInt(openingHours[1].split(":")[0], 10);

      return startTime >= startHour && endTime <= endHour;
    });
  }

  switch (true) {
    case filterBy.isNew:
      filteredRestaurants = filterByOpeningDate(restaurants, 2);
      break;
    case filterBy.isPopular:
      filteredRestaurants = filterTopRated(restaurants);
      break;
    case filterBy.isOpen:
      filteredRestaurants = filterByOpeningHours(restaurants, 14, 15);
      break;
    default:
      break;
  }

  return new Promise((resolve) =>
    setTimeout(() => resolve(filteredRestaurants), 500)
  );
};

export const restaurantService = {
  query,
};
