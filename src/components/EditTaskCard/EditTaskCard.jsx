import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { editTask, markTaskDone } from "src/store/task/actions/taskActions";
import {
  ALT_TEXT_DELETE_ICON,
  ALT_TEXT_DONE_ICON,
  ICON_DELETE,
  ICON_DONE,
} from "src/common/constants";
import { sanitizeText } from "src/utils/sanitizeText";
import IconButton from "src/components/Buttons/IconButton/IconButton";
import "src/components/AddTaskCard/AddTaskCard.scss";

function EditTaskCard({ taskId, taskTitle, onToggleEditTask }) {
  const [inputText, setInputText] = useState(taskTitle);
  const sanitizedInput = sanitizeText(inputText);
  const isSaveButtonDisabled = sanitizeText(inputText) === "";
  const dispatch = useDispatch();

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleSave() {
    if (sanitizedInput !== taskTitle) {
      dispatch(editTask({ taskId, taskTitle: sanitizedInput }));
    }

    onToggleEditTask();
  }

  function handleDelete() {
    setInputText(taskTitle);
  }

  function handleDone() {
    dispatch(markTaskDone(taskId));
    handleSave();
  }

  return (
    <>
      <textarea
        className="task__textarea"
        autoFocus
        value={inputText}
        onChange={handleChange}
      />

      <div className="tasks-container__box-buttons">
        <button
          className={`task__save-button ${
            isSaveButtonDisabled ? "task__save-button-disabled " : null
          }`}
          disabled={isSaveButtonDisabled}
          onClick={handleSave}
        >
          Save
        </button>
        <IconButton
          buttonSrc={ICON_DELETE}
          buttonAltText={ALT_TEXT_DELETE_ICON}
          onAction={handleDelete}
        />
        <IconButton
          buttonSrc={ICON_DONE}
          buttonAltText={ALT_TEXT_DONE_ICON}
          onAction={handleDone}
          isDisabled={isSaveButtonDisabled}
        />
      </div>
    </>
  );
}

EditTaskCard.propTypes = {
  taskId: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  onToggleEditTask: PropTypes.func.isRequired,
};

export default EditTaskCard;
