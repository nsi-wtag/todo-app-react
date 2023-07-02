import PropTypes from "prop-types";
import { getDaysToCompleteTask } from "src/utils/compareDate";
import DeleteButton from "src/components/Buttons/DeleteButton/DeleteButton";
import DoneButton from "src/components/Buttons/DoneButton/DoneButton";
import EditButton from "src/components/Buttons/EditButton/EditButton";

function TaskCardButtonsContainer({
  isTaskDone,
  createdAt,
  taskDoneAt,
  onDeleteTask,
  onTaskDone,
  onEditTask,
}) {
  const numberOfDays = getDaysToCompleteTask(createdAt, taskDoneAt);
  const dayStr = numberOfDays > 1 ? "days" : "day";

  return (
    <>
      <DeleteButton onDelete={onDeleteTask} />
      {isTaskDone ? (
        <p>{`Completed in ${numberOfDays} ${dayStr}`}</p>
      ) : (
        <>
          <EditButton onEdit={onEditTask} />
          <DoneButton onDone={onTaskDone} />
        </>
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
  onDeleteTask: PropTypes.func.isRequired,
  onTaskDone: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
};

export default TaskCardButtonsContainer;
