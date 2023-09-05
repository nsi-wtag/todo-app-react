import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  PLACEHOLDER_SEARCH_TASK,
  TYPE_SUBMIT,
  TYPE_TEXT,
} from "src/common/constants";
import { setSearch } from "src/store/search/actions/searchAction";
import { sanitizeText } from "src/utils/sanitizeText";
import "./Header.scss";

function Header() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState(null);

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleQuerySubmit() {
    dispatch(setSearch(sanitizeText(query)));
  }

  return (
    <nav className="navbar">
      <div className="navbar__title">Todos</div>
      <div className="navbar__search">
        <input
          className="navbar__search-input"
          type={TYPE_TEXT}
          placeholder={PLACEHOLDER_SEARCH_TASK}
          onChange={handleQueryChange}
        />
        <button
          className="navbar__search-button"
          type={TYPE_SUBMIT}
          onClick={handleQuerySubmit}
        >
          Search
        </button>
      </div>
    </nav>
  );
}

export default Header;
