import { useState } from "react";
import PropTypes from "prop-types";
import { sanitizeText } from "src/utils/sanitizeText";
import "./AddTaskCard.scss";

function AddTaskCard({ onCreateTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const sanitizedTaskTitle = sanitizeText(taskTitle);
  const isTaskButtonDisabled = sanitizedTaskTitle === "";

  function handleChange(event) {
    setTaskTitle(event.target.value);
  }

  function handleAddTask() {
    onCreateTask(sanitizedTaskTitle);
  }

  return (
    <div>
      <textarea
        className="task__textarea"
        autoFocus
        value={taskTitle}
        onChange={handleChange}
      />

      <button
        className={`task__save-button ${
          isTaskButtonDisabled ? "task__save-button-disabled " : ""
        }`}
        disabled={isTaskButtonDisabled}
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}

AddTaskCard.propTypes = {
  onCreateTask: PropTypes.func.isRequired,
};

export default AddTaskCard;
