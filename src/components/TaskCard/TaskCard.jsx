import { useState } from "react";
import PropTypes from "prop-types";
import EditTaskCard from "src/components/EditTaskCard/EditTaskCard";
import TaskCardPreview from "src/components/TaskCardPreview/TaskCardPreview";
import "src/components/TaskCardPreview/TaskCardPreview.scss";

function TaskCard({ task }) {
  const { taskId, taskTitle, createdAt, taskDoneAt, isTaskDone } = task;
  const [isEditing, setIsEditing] = useState(false);

  function toggleEditTask() {
    setIsEditing(!isEditing);
  }

  return (
    <div className="tasks-container__box">
      {isEditing ? (
        <EditTaskCard taskTitle={taskTitle} onToggleEditTask={toggleEditTask} />
      ) : (
        <TaskCardPreview
          taskId={taskId}
          taskTitle={taskTitle}
          isTaskDone={isTaskDone}
          createdAt={createdAt}
          taskDoneAt={taskDoneAt}
          onToggleEditTask={toggleEditTask}
        />
      )}
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    taskId: PropTypes.string.isRequired,
    taskTitle: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    taskDoneAt: PropTypes.instanceOf(Date),
    isTaskDone: PropTypes.bool.isRequired,
  }),
};

export default TaskCard;
