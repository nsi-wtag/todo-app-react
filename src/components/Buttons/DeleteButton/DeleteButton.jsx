import PropTypes from "prop-types";
import { ALT_TEXT_DELETE_ICON, ICON_DELETE } from "src/common/constants";
import "./DeleteButton.scss";

function DeleteButton({ onDelete }) {
  return (
    <button onClick={onDelete} className="button-delete">
      <img src={ICON_DELETE} alt={ALT_TEXT_DELETE_ICON} />
    </button>
  );
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
