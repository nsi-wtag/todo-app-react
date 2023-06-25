import PropTypes from "prop-types";
import { ALT_TEXT_DONE_ICON, ICON_DONE } from "src/common/constants";
import "src/components/Buttons/buttons.scss";

function DoneButton({ onDone }) {
  return (
    <button onClick={onDone} className="button-icon">
      <img src={ICON_DONE} alt={ALT_TEXT_DONE_ICON} />
    </button>
  );
}

DoneButton.propTypes = {
  onDone: PropTypes.func.isRequired,
};

export default DoneButton;
