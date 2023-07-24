import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { deleteTask, markTaskDone } from "src/store/task/actions/taskActions";
import { formatDate } from "src/utils/formatDate";
import TaskCardButtonsContainer from "src/components/TaskCardButtonsContainer/TaskCardButtonsContainer";
import "./TaskCard.scss";

function TaskCard({ taskId, taskTitle, createdAt, taskDoneAt, isTaskDone }) {
  const dispatch = useDispatch();

  function handleDeleteTask() {
    dispatch(deleteTask(taskId));
  }

  function handleTaskDone() {
    dispatch(markTaskDone(taskId));
  }

  return (
    <div className="tasks-container__box">
      <h3 className={classNames({ task_done: isTaskDone })}>{taskTitle}</h3>
      <p>Created At: {formatDate(createdAt)}</p>

      <div className="tasks-container__box-buttons">
        <TaskCardButtonsContainer
          isTaskDone={isTaskDone}
          createdAt={createdAt}
          taskDoneAt={taskDoneAt}
          onDeleteTask={handleDeleteTask}
          onTaskDone={handleTaskDone}
        />
      </div>
    </div>
  );
}

TaskCard.defaultProps = {
  taskDoneAt: null,
};

TaskCard.propTypes = {
  taskId: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  taskDoneAt: PropTypes.instanceOf(Date),
  isTaskDone: PropTypes.bool.isRequired,
};

export default TaskCard;
