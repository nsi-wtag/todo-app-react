import PropTypes from "prop-types";
import { getDaysToCompleteTask } from "src/utils/compareDate";
import {
  ALT_TEXT_DELETE_ICON,
  ALT_TEXT_DONE_ICON,
  ICON_DELETE,
  ICON_DONE,
} from "src/common/constants";
import IconButton from "src/components/Buttons/IconButton/IconButton";

function TaskCardButtonsContainer({
  isTaskDone,
  createdAt,
  taskDoneAt,
  onDeleteTask,
  onTaskDone,
}) {
  const numberOfDays = getDaysToCompleteTask(createdAt, taskDoneAt);
  const dayStr = numberOfDays > 1 ? "days" : "day";

  return (
    <>
      <IconButton
        buttonSrc={ICON_DELETE}
        buttonAltText={ALT_TEXT_DELETE_ICON}
        onAction={onDeleteTask}
      />
      {isTaskDone ? (
        <p>{`Completed in ${numberOfDays} ${dayStr}`}</p>
      ) : (
        <IconButton
          buttonSrc={ICON_DONE}
          buttonAltText={ALT_TEXT_DONE_ICON}
          onAction={onTaskDone}
        />
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
};

export default TaskCardButtonsContainer;
