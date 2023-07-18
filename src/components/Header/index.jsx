import {
  PLACEHOLDER_SEARCH_TASK,
  INPUT_TYPE_SUBMIT,
  TYPE_TEXT,
} from "@common/constants";
import "./styles.scss";
import "@styles/_helpers.scss";

function Header() {
  return (
    <nav className="navbar align-center d-flex justify-between">
      <div className="navbar__title">Todos</div>
      <div className="navbar__search align-center d-flex">
        <input
          className="navbar__search-input"
          type={TYPE_TEXT}
          placeholder={PLACEHOLDER_SEARCH_TASK}
        />
        <button className="navbar__search-button" type={INPUT_TYPE_SUBMIT}>
          Search
        </button>
      </div>
    </nav>
  );
}

export default Header;
