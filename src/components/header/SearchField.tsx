import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "assets/images/layout/searchIcon.svg";
import { PLACEHOLDER_SERACH_INPUT } from "constants/variables";
import "styles/header/searchField.scss";
import { selectSearch, setSearch } from "store/features/searchSlice";

interface SearchFieldProps {
  iconSize?: number;
  className: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ iconSize, className }) => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  return (
    <>
      <div className="search-container">
        <img
          className={className}
          src={SearchIcon}
          alt="search_icon"
          style={{ width: iconSize, height: iconSize }}
        />
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          value={search}
          className="hero-input-field"
          type="text"
          placeholder={PLACEHOLDER_SERACH_INPUT}
        />
      </div>
    </>
  );
};

export default SearchField;
