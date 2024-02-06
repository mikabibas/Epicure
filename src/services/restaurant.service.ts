import { API_URL } from "constants/variables";
import { ICard } from "constants/interfaces";

const query = async (filterBy: string): Promise<ICard[]> => {
  try {
    const response = await fetch(`${API_URL}/restaurants?filterBy=${filterBy}`);
    if (!response.ok) {
      throw new Error(`Error loading restaurants. Status: ${response.status}`);
    }
    const data = await response.json();
    const restaurants: ICard[] = Array.isArray(data.restaurants)
      ? data.restaurants
      : [];

    return restaurants;
  } catch (error) {
    console.error("Error loading restaurants:", error);
    throw error;
  }
};

export const restaurantService = {
  query,
};
