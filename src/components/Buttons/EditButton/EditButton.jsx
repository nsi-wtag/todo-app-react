import PropTypes from "prop-types";
import { ICON_EDIT, ALT_TEXT_EDIT_ICON } from "src/common/constants";
import "src/components/Buttons/buttons.scss";

function EditButton({ onEdit }) {
  return (
    <button className="button-icon" onClick={onEdit}>
      <img src={ICON_EDIT} alt={ALT_TEXT_EDIT_ICON} />
    </button>
  );
}

EditButton.propTypes = {
  onEdit: PropTypes.func.isRequired,
};

export default EditButton;
