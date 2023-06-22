import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "src/store/task/actions/taskActions";
import TaskNavBar from "src/components/TaskNavBar/TaskNavBar";
import AddTaskCard from "src/components/AddTaskCard/AddTaskCard";
import TaskList from "src/components/TaskList/TaskList";
import "./TaskBoard.scss";

function TaskBoard() {
  const [isCreateButtonClicked, setIsCreateButtonClicked] = useState(false);

  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  function handleCreateButton() {
    setIsCreateButtonClicked(!isCreateButtonClicked);
  }

  function handleCreateTask(taskTitle) {
    handleCreateButton();
    dispatch(addTask({ taskTitle: taskTitle }));
  }

  return (
    <>
      <TaskNavBar onCreateButtonClicked={handleCreateButton} />

      <div className="tasks-container">
        {isCreateButtonClicked && (
          <AddTaskCard onCreateTask={handleCreateTask} />
        )}

        <TaskList tasks={tasks} />
      </div>
    </>
  );
}

export default TaskBoard;
