import PropTypes from "prop-types";
import "src/components/Buttons/buttons.scss";

function IconButton({ buttonSrc, buttonAltText, onAction }) {
  return (
    <button onClick={onAction} className="button-icon">
      <img src={buttonSrc} alt={buttonAltText} />
    </button>
  );
}

IconButton.propTypes = {
  buttonSrc: PropTypes.string.isRequired,
  buttonAltText: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default IconButton;
