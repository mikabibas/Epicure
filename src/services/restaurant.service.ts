import { ICard } from "constants/interfaces";

export interface IFilterBy {
  isNew?: boolean;
  isPopular?: boolean;
  isOpen?: boolean;
}

const query = async (filterBy: IFilterBy) => {
  try {
    const response = await fetch("http://localhost:9090/api/restaurants");
    if (!response.ok) {
      throw new Error(`Error loading restaurants. Status: ${response.status}`);
    }

    const restaurants = await response.json();

    let filteredRestaurants = restaurants as ICard[];

    const filterByOpeningDate = (restaurants: ICard[], years: number) => {
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
    };

    const filterTopRated = (restaurants: any) => {
      return restaurants.filter(
        (restaurant: any) => restaurant.rating.number >= 4
      );
    };

    const filterByOpeningHours = (
      restaurants: ICard[],
      startHour: number,
      endHour: number
    ) => {
      return restaurants.filter((restaurant: any) => {
        const openingHours = restaurant.opening_hours.split(" - ");
        const startTime = parseInt(openingHours[0].split(":")[0], 10);
        const endTime = parseInt(openingHours[1].split(":")[0], 10);

        return startTime >= startHour && endTime <= endHour;
      });
    };

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

    return filteredRestaurants;
  } catch (error) {
    console.error("Error loading restaurants:", error);
    throw error;
  }
};



export const restaurantService = {
  query,
};
