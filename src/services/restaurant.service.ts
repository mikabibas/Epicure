import axios from "axios";
import { API_URL } from "constants/variables";
import { ICard } from "constants/interfaces";

const query = async (
  filterBy: string,
  offset: number,
  limit: number
): Promise<ICard[]> => {
  try {
    const response = await axios.get(
      `${API_URL}/restaurants?filterBy=${filterBy}&offset=${offset}&limit=${limit}`
    );

    if (response.status !== 200) {
      console.error(
        `Error loading more restaurants. Status: ${response.status}`
      );
      return [];
    }

    const moreRestaurants: ICard[] = Array.isArray(response.data.restaurants)
      ? response.data.restaurants
      : [];

    return moreRestaurants;
  } catch (error) {
    console.error("Error loading more restaurants:", error);
    return [];
  }
};

const getRestaurantById = async (
  restaurantId: string
): Promise<ICard | null> => {
  try {
    const response = await axios.get(`${API_URL}/restaurants/${restaurantId}`);

    if (response.status !== 200) {
      console.error(`Error loading restaurant. Status: ${response.status}`);
      return null;
    }

    const restaurant: ICard | null = response.data.restaurant || null;
    return restaurant;
  } catch (error) {
    console.error("Error loading restaurant:", error);
    return null;
  }
};

export const restaurantService = {
  query,
  getRestaurantById,
};
