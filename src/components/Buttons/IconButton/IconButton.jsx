import PropTypes from "prop-types";
import "src/components/Buttons/buttons.scss";

function IconButton({ icon, buttonAltText, onClick }) {
  return (
    <button onClick={onClick} className="button-icon">
      <img src={icon} alt={buttonAltText} />
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  buttonAltText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
