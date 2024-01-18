import { PLACEHOLDER_SERACH_INPUT } from "constants/variables";
import SearchIcon from "assets/images/layout/searchIcon.svg";

const SearchField = () => {
  return (
    <>
      <div className="search-container">
        <img className="search-icon" src={SearchIcon} alt="search_icon" />
        <input
          className="input-field"
          type="text"
          placeholder={PLACEHOLDER_SERACH_INPUT}
        />
      </div>
    </>
  );
};
export default SearchField;
