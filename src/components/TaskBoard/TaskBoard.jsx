import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/task/actions/taskActions";
import TaskNavBar from "../TaskNavBar/TaskNavBar";
import AddTaskCard from "../AddTaskCard/AddTaskCard";
import TaskList from "../TaskList/TaskList";
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
