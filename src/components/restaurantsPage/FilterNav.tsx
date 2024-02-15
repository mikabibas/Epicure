import { NAV_OPTIONS } from "constants/variables";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateFilterByChef } from "store/features/chefSlice";
import { updateFilterBy } from "store/features/restaurantSlice";
import { RootState, useAppSelector } from "store/store";
import "styles/filterNav.scss";

interface FilterNavProps {
  context: "restaurant" | "chef";
}

const FilterNav: React.FC<FilterNavProps> = ({ context }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const location = useLocation();
  const filterBy = useAppSelector((state) => state.chefs.filterBy);

  const currentFilter = useAppSelector((state: RootState) =>
    context === "restaurant" ? state.restaurants.filterBy : state.chefs.filterBy
  );

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFilter = event.target.value as
      | "all"
      | "new"
      | "most-popular"
      | "open-now";

    if (selectedFilter !== currentFilter) {
      setSelectedOption(selectedFilter);

      if (context === "restaurant") {
        dispatch(updateFilterBy(selectedFilter) as any);
      } else if (context === "chef") {
        dispatch(updateFilterByChef(selectedFilter) as any);
      }
    }
  };

  const getCheckedClass = (option: string) => {
    return filterBy === option ? "checked" : "";
  };

  const shouldRenderOpenNowOption = location.pathname !== "/chefs";
  const shouldRenderMostViewedOption = context === "chef";

  return (
    <>
      <div className="navigation-menu">
        {NAV_OPTIONS.map(
          (option: string) =>
            (option !== "Open Now" || shouldRenderOpenNowOption) &&
            (option !== "Most Popular" || shouldRenderMostViewedOption) && (
              <div key={option}>
                {option === "open-now" && !shouldRenderOpenNowOption ? null : (
                  <>
                    <input
                      type="radio"
                      id={option}
                      name="radioGroup"
                      value={option}
                      checked={selectedOption === option}
                      onChange={handleRadioChange}
                      className="nav-item"
                    />
                    <label
                      className={`nav-item ${getCheckedClass(option)}`}
                      htmlFor={option}
                    >
                      {option === "Most Popular" && context === "chef"
                        ? "Most Viewed"
                        : option}
                    </label>
                  </>
                )}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default FilterNav;
