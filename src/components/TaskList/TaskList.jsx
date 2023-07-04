import PropTypes from "prop-types";
import TaskCard from "src/components/TaskCard/TaskCard";

function TaskList({ tasks, visibleTaskRange, isCreateButtonClicked }) {
  let rangeOfTasks = visibleTaskRange;

  if (isCreateButtonClicked) {
    rangeOfTasks -= 1;
  }

  return (
    <>
      {tasks?.slice(0, rangeOfTasks).map((task) => (
        <TaskCard task={task} key={task.taskId} />
      ))}
    </>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      taskId: PropTypes.string.isRequired,
      taskTitle: PropTypes.string.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
      taskDoneAt: PropTypes.instanceOf(Date),
      isTaskDone: PropTypes.bool.isRequired,
    })
  ),
  visibleTaskRange: PropTypes.number.isRequired,
  isCreateButtonClicked: PropTypes.bool.isRequired,
};

export default TaskList;
