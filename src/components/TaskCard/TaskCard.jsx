import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteTask } from "src/store/task/actions/taskActions";
import "./TaskCard.scss";

function TaskCard({ taskId, taskTitle, createdAt }) {
  const dispatch = useDispatch();

  function handleDeleteTask() {
    dispatch(deleteTask(taskId));
  }

  return (
    <div className="tasks-container__box">
      <h3>{taskTitle}</h3>
      <p>Created At: {createdAt}</p>
      <button onClick={handleDeleteTask}>Delete Task</button>
    </div>
  );
}

TaskCard.propTypes = {
  taskId: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default TaskCard;
