import { API_URL } from "constants/variables";
import { ICard } from "constants/interfaces";

const query = async (
  filterBy: string,
  offset: number,
  limit: number
): Promise<ICard[]> => {
  try {
    const response = await fetch(
      `${API_URL}/restaurants?filterBy=${filterBy}&offset=${offset}&limit=${limit}`
    );

    if (!response.ok) {
      console.error(
        `Error loading more restaurants. Status: ${response.status}`
      );
      return [];
    }

    const data = await response.json();
    const moreRestaurants: ICard[] = Array.isArray(data.restaurants)
      ? data.restaurants
      : [];

    return moreRestaurants;
  } catch (error) {
    console.error("Error loading more restaurants:", error);
    return [];
  }
};

export const restaurantService = {
  query,
};
