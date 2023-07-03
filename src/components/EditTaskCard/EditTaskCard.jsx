import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { editTask } from "src/store/task/actions/taskActions";
import { sanitizeText } from "src/utils/sanitizeText";
import DeleteButton from "src/components/Buttons/DeleteButton/DeleteButton";
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
        <DeleteButton onDelete={handleDelete} />
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
