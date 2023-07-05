import PropTypes from "prop-types";
import "src/components/Buttons/buttons.scss";

function IconButton({ buttonSrc, buttonAltText, onAction, isDisabled }) {
  return (
    <button
      onClick={onAction}
      className={`button-icon ${isDisabled && "button-icon-disabled"}`}
      disabled={isDisabled}
    >
      <img src={buttonSrc} alt={buttonAltText} />
    </button>
  );
}

IconButton.defaultProps = {
  isDisabled: false,
};

IconButton.propTypes = {
  buttonSrc: PropTypes.string.isRequired,
  buttonAltText: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

export default IconButton;
