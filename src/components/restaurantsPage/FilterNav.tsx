import { NAV_OPTIONS } from "constants/variables";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IFilterBy } from "services/restaurant.service";
import { updateFilterBy } from "store/features/filterBySlice";
import { useLocation } from "react-router-dom";
import "styles/filterNav.scss";

const FilterNav = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const location = useLocation();

  const handleRadioChange = (event: any) => {
    let filterOptions: IFilterBy = {};

    switch (event.target.value) {
      case "All":
        filterOptions = { isNew: false, isOpen: false, isPopular: false };
        break;
      case "New":
        filterOptions = { isNew: true, isOpen: false, isPopular: false };
        break;
      case "Open Now":
        filterOptions = { isNew: false, isOpen: true, isPopular: false };
        break;
      case "Most Popular":
        filterOptions = { isNew: false, isOpen: false, isPopular: true };
        break;
      default:
        break;
    }

    dispatch(updateFilterBy(filterOptions) as any);
    setSelectedOption(event.target.value);
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
