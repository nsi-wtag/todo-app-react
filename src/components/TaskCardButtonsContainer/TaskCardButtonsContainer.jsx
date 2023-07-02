import PropTypes from "prop-types";
import { getDaysToCompleteTask } from "src/utils/compareDate";
import DeleteButton from "src/components/Buttons/DeleteButton/DeleteButton";
import DoneButton from "src/components/Buttons/DoneButton/DoneButton";

function TaskCardButtonsContainer({
  isTaskDone,
  createdAt,
  taskDoneAt,
  handleDeleteTask,
  handleTaskDone,
}) {
  const numberOfDays = getDaysToCompleteTask(createdAt, taskDoneAt);
  const dayStr = numberOfDays > 1 ? "days" : "day";

  return (
    <>
      <DeleteButton onDelete={handleDeleteTask} />
      {isTaskDone ? (
        <p>{`Completed in ${numberOfDays} ${dayStr}`}</p>
      ) : (
        <DoneButton onDone={handleTaskDone} />
      )}
    </>
  );
}

TaskCardButtonsContainer.defaultProps = {
  taskDoneAt: null,
};

TaskCardButtonsContainer.propTypes = {
  isTaskDone: PropTypes.bool.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  taskDoneAt: PropTypes.instanceOf(Date),
  handleDeleteTask: PropTypes.func.isRequired,
  handleTaskDone: PropTypes.func.isRequired,
};

export default TaskCardButtonsContainer;
