import { useState } from "react";
import PropTypes from "prop-types";
import DeleteButton from "src/components/Buttons/DeleteButton/DeleteButton";
import "src/components/AddTaskCard/AddTaskCard.scss";

function EditTaskCard({ taskTitle, onToggleEditTask }) {
  const [inputText, setInputText] = useState(taskTitle);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleSave() {
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
        <button onClick={handleSave}>Save</button>
        <DeleteButton onDelete={handleDelete} />
      </div>
    </>
  );
}

EditTaskCard.propTypes = {
  taskTitle: PropTypes.string.isRequired,
  onToggleEditTask: PropTypes.func.isRequired,
};

export default EditTaskCard;
