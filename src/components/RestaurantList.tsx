import React, { useEffect } from "react";
import { fetchRestaurants } from "store/features/restaurantSlice";
import { useAppDispatch, useAppSelector } from "store/store";

const RestaurantList: React.FC = () => {
  const dispatch = useAppDispatch();
  const restaurants = useAppSelector(
    (state: any) => state.restaurants.restaurants
  );
  const status = useAppSelector((state: any) => state.restaurants.status);
  const error = useAppSelector((state: any) => state.restaurants.error);

  useEffect(() => {
    dispatch(fetchRestaurants() as any);
  }, [dispatch]);

  console.log(status);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Restaurant List</h2>
      <ul>
        {restaurants.map((restaurant: any) => (
          <li key={restaurant.id}>{restaurant.name_res}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
