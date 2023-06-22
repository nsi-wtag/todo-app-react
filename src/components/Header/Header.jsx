import { PLACEHOLDER_SEARCH_TASK } from "src/common/constants";
import "./Header.scss";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar__title">Todos</div>
      <div className="navbar__search">
        <input
          className="navbar__search-input"
          type="text"
          placeholder={PLACEHOLDER_SEARCH_TASK}
        />
        <button className="navbar__search-button" type="submit">
          Search
        </button>
      </div>
    </nav>
  );
}

export default Header;
