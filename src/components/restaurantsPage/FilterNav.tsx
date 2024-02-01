import { NAV_OPTIONS } from "constants/variables";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateFilterBy } from "store/features/restaurantSlice";
import "styles/filterNav.scss";

const FilterNav = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const location = useLocation();

  const handleRadioChange = (event: any) => {
    const selectedFilter = event.target.value;
    setSelectedOption(selectedFilter);
    dispatch(updateFilterBy(selectedFilter) as any);
  };

  const getCheckedClass = (option: string) => {
    return selectedOption === option ? "checked" : "";
  };

  const shouldRenderOpenNowOption = location.pathname !== "/chefs";
  const shouldRenderMostViewedOption = true;

  return (
    <>
      <div className="navigation-menu">
        {NAV_OPTIONS.map(
          (option: string) =>
            (option !== "Open Now" || shouldRenderOpenNowOption) &&
            (option !== "Most Popular" || shouldRenderMostViewedOption) && (
              <div key={option}>
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
                  {option === "Most Popular" ? "Most Viewed" : option}
                </label>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default FilterNav;
