import PropTypes from "prop-types";
import classNames from "classnames";
import "src/components/Buttons/buttons.scss";

function IconButton({ icon, buttonAltText, onClick, isDisabled }) {
  return (
    <button
      onClick={onClick}
      className={classNames("button-icon", {
        "button-icon-disabled": isDisabled,
      })}
      disabled={isDisabled}
    >
      <img src={icon} alt={buttonAltText} />
    </button>
  );
}

IconButton.defaultProps = {
  isDisabled: false,
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  buttonAltText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

export default IconButton;
