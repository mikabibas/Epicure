import { ALL, MAP_VIEW, MOST_POP, NEW, OPEN_NOW } from "constants/variables";
import { Link, useLocation } from "react-router-dom";
import "styles/filterNav.scss";

const FilterNav = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/restaurants");

  return (
    <div className="navigation-menu">
      <ul>
        <li className={splitLocation[1] === "all" ? "active" : ""}>
          <Link to="/all">{ALL}</Link>
        </li>
        <li className={splitLocation[1] === "new" ? "active" : ""}>
          <Link to="/new">{NEW}</Link>
        </li>
        <li className={splitLocation[1] === "most-popular" ? "active" : ""}>
          <Link to="/most-popular">{MOST_POP}</Link>
        </li>
        <li className={splitLocation[1] === "open-now" ? "active" : ""}>
          <Link to="/open-now">{OPEN_NOW}</Link>
        </li>
        <li className={splitLocation[1] === "map-view" ? "active" : ""}>
          <Link to="/map-view">{MAP_VIEW}</Link>
        </li>
      </ul>
    </div>
  );
};
export default FilterNav;
