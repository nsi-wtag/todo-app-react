import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteTask } from "src/store/task/actions/taskActions";
import { ALT_TEXT_DELETE_ICON, ICON_DELETE } from "src/common/constants";
import IconButton from "src/components/Buttons/IconButton/IconButton";
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
      <IconButton
        icon={ICON_DELETE}
        buttonAltText={ALT_TEXT_DELETE_ICON}
        onClick={handleDeleteTask}
      />
    </div>
  );
}

TaskCard.propTypes = {
  taskId: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default TaskCard;
