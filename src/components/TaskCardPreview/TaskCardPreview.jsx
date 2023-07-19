import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { deleteTask, markTaskDone } from "src/store/task/actions/taskActions";
import { formatDate } from "src/utils/formatDate";
import TaskCardButtonsContainer from "src/components/TaskCardButtonsContainer/TaskCardButtonsContainer";
import "./TaskCardPreview.scss";
import { displayToastNotification } from "src/utils/toast";

function TaskCardPreview({
  taskId,
  taskTitle,
  createdAt,
  taskDoneAt,
  isTaskDone,
  onToggleEditTask,
}) {
  const dispatch = useDispatch();

  function handleDeleteTask() {
    dispatch(deleteTask(taskId));
    displayToastNotification("Task Deleted", "error");
  }

  function handleTaskDone() {
    dispatch(markTaskDone(taskId));
    displayToastNotification("Task Completed", "success");
  }

  function handleEditTask() {
    onToggleEditTask();
  }

  return (
    <>
      <h3 className={classNames({ task_done: isTaskDone })}>{taskTitle}</h3>
      <p>Created At: {formatDate(createdAt)}</p>

      <div className="tasks-container__box-buttons">
        <TaskCardButtonsContainer
          isTaskDone={isTaskDone}
          createdAt={createdAt}
          taskDoneAt={taskDoneAt}
          onDeleteTask={handleDeleteTask}
          onTaskDone={handleTaskDone}
          onEditTask={handleEditTask}
        />
      </div>
    </>
  );
}

TaskCardPreview.defaultProps = {
  taskDoneAt: null,
};

TaskCardPreview.propTypes = {
  taskId: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  taskDoneAt: PropTypes.instanceOf(Date),
  isTaskDone: PropTypes.bool.isRequired,
  onToggleEditTask: PropTypes.func.isRequired,
};

export default TaskCardPreview;
