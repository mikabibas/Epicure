import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "store/features/restaurantSlice";

const RestaurantList: React.FC = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(
    (state: any) => state.restaurants.restaurants
  );
  const status = useSelector((state: any) => state.restaurants.status);
  const error = useSelector((state: any) => state.restaurants.error);

  useEffect(() => {
    dispatch(fetchRestaurants() as any);
  }, [dispatch]);

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
