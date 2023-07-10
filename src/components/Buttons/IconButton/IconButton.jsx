import PropTypes from "prop-types";
import "src/components/Buttons/buttons.scss";

function IconButton({ icon, buttonAltText, onAction }) {
  return (
    <button onClick={onAction} className="button-icon">
      <img src={icon} alt={buttonAltText} />
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  buttonAltText: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default IconButton;
