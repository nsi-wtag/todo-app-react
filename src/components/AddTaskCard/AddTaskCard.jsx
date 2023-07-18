import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { sanitizeText } from "@utils/sanitizeText";
import "./AddTaskCard.scss";

function AddTaskCard({ onCreateTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const sanitizedTaskTitle = sanitizeText(taskTitle);
  const isTaskTitleEmpty = sanitizedTaskTitle === "";

  function handleTaskNameChange(event) {
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
        onChange={handleTaskNameChange}
      />

      <button
        className={classNames("task__save-button", {
          "task__save-button-disabled": isTaskTitleEmpty,
        })}
        disabled={isTaskTitleEmpty}
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
