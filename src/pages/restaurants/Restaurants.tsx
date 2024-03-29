import { useEffect, useState } from "react";
import FilterNav from "components/restaurantsPage/FilterNav";
import MappedCards from "components/restaurantsPage/MappedCards";
import { useAppSelector, useAppDispatch } from "store/store";
import { loadMoreRestaurants } from "store/features/restaurantSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { ICard } from "constants/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import Loader from "components/loader/Loader";
import { NO_RESTAURANT_DISPLAY, RESTAURANTS } from "constants/variables";
import "styles/restaurants/restaurantPage.scss";

const Restaurants = () => {
  const dispatch = useAppDispatch();
  const restaurants = useAppSelector(
    (state: any) => state.restaurants.restaurants
  );
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(loadMoreRestaurants());
  }, [dispatch]);

  const fetchMoreData = async () => {
    try {
      const action = await dispatch(loadMoreRestaurants());
      const moreRestaurants = (
        action as PayloadAction<
          ICard[],
          string,
          { requestId: string; requestStatus: "fulfilled" }
        >
      ).payload;

      if (moreRestaurants.length > 0) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading more restaurants:", error);
    }
  };

  return (
    <div>
      <Loader sliceName="restaurants" />
      <h1 className="page-title">{RESTAURANTS}</h1>
      <FilterNav context="restaurant" />
      <InfiniteScroll
        dataLength={restaurants.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>{NO_RESTAURANT_DISPLAY}</b>
          </p>
        }
      >
        <MappedCards cards={restaurants} />
      </InfiniteScroll>
    </div>
  );
};

export default Restaurants;
