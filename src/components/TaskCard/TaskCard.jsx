import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteTask, markTaskDone } from "src/store/task/actions/taskActions";
import DeleteButton from "src/components/Buttons/DeleteButton/DeleteButton";
import DoneButton from "../Buttons/DoneButton/DoneButton";
import "./TaskCard.scss";

function TaskCard({ taskId, taskTitle, createdAt, isTaskDone }) {
  const dispatch = useDispatch();

  function handleDeleteTask() {
    dispatch(deleteTask(taskId));
  }

  function handleTaskDone() {
    dispatch(markTaskDone(taskId));
  }

  return (
    <div className="tasks-container__box">
      <h3 className={`${isTaskDone ? "task_done" : ""}`}>{taskTitle}</h3>
      <p>Created At: {createdAt}</p>

      <div className="tasks-container__box-buttons">
        <DeleteButton onDelete={handleDeleteTask} />
        <DoneButton onDone={handleTaskDone} />
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  taskId: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isTaskDone: PropTypes.bool.isRequired,
};

export default TaskCard;
