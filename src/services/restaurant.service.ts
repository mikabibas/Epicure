import { API_URL } from "constants/variables";
import { ICard } from "constants/interfaces";

const query = async (filterBy: string): Promise<ICard[]> => {
  try {
    const response = await fetch(`${API_URL}/restaurants?filterBy=${filterBy}`);
    if (!response.ok) {
      console.error(`Error loading restaurants. Status: ${response.status}`);
      return [];
    }
    const data = await response.json();
    const restaurants: ICard[] = Array.isArray(data.restaurants)
      ? data.restaurants
      : [];

    return restaurants;
  } catch (error) {
    console.error("Error loading restaurants:", error);
    return [];
  }
};

export const restaurantService = {
  query,
};
