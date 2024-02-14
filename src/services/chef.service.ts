import axios from "axios";
import { API_URL } from "constants/variables";
import { IChef } from "constants/interfaces";

const fetchAllChefs = async (filterBy: string): Promise<IChef[]> => {
  try {
    const response = await axios.get(`${API_URL}/chefs?filterBy=${filterBy}`);

    if (response.status !== 200) {
      console.error(`Error loading chefs. Status: ${response.status}`);
      return [];
    }

    const chefs: IChef[] = Array.isArray(response.data.chefs)
      ? response.data.chefs
      : [];

    return chefs;
  } catch (error) {
    console.error("Error loading chefs:", error);
    return [];
  }
};

const getChefById = async (chefId: string): Promise<IChef | null> => {
  try {
    const response = await axios.get(`${API_URL}/chefs/${chefId}`);

    if (response.status !== 200) {
      console.error(`Error loading chef. Status: ${response.status}`);
      return null;
    }

    const chef: IChef | null = response.data.chef || null;
    return chef;
  } catch (error) {
    console.error("Error loading chef:", error);
    return null;
  }
};

export const chefService = {
  fetchAllChefs,
  getChefById,
};
