import { ICON_EDIT, ALT_TEXT_EDIT_ICON } from "src/common/constants";
import "src/components/Buttons/buttons.scss";

function EditButton() {
  return (
    <button className="button-icon">
      <img src={ICON_EDIT} alt={ALT_TEXT_EDIT_ICON} />
    </button>
  );
}

export default EditButton;
