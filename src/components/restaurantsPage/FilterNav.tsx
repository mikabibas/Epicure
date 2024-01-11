import { CHEF_FILTERS, RES_FILTERS } from "constants/variables";
import { Link, useLocation } from "react-router-dom";
import "styles/filterNav.scss";

const FilterNav = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/restaurants");

  const isChefs = pathname.includes("/chefs");

  const currentFilters = isChefs ? CHEF_FILTERS : RES_FILTERS;

  return (
    <div className="navigation-menu">
      <ul>
        {currentFilters.map(
          (filter) =>
            !(
              isChefs &&
              filter.path === "/map-view" &&
              window.innerWidth <= 768
            ) && (
              <li
                key={filter.path}
                className={splitLocation[1] === filter.path ? "active" : ""}
                style={{
                  display:
                    !isChefs &&
                    filter.path === "/map-view" &&
                    window.innerWidth <= 768
                      ? "none"
                      : "block",
                }}
              >
                <Link to={filter.path}>
                  {isChefs && filter.path === "/most-popular"
                    ? "Most Viewed"
                    : filter.label}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default FilterNav;
