import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "@store/task/actions/taskActions";
import TaskNavBar from "@components/TaskNavBar/TaskNavBar";
import AddTaskCard from "@components/AddTaskCard/AddTaskCard";
import TaskList from "@components/TaskList/TaskList";
import "./TaskBoard.scss";

function TaskBoard() {
  const [isCreateTask, setIsCreateTask] = useState(false);

  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  function handleCreateButton() {
    setIsCreateTask(!isCreateTask);
  }

  function handleCreateTask(taskTitle) {
    handleCreateButton();
    dispatch(addTask({ taskTitle: taskTitle }));
  }

  return (
    <>
      <TaskNavBar onCreateButtonClick={handleCreateButton} />

      <div className="tasks-container">
        {isCreateTask && <AddTaskCard onCreateTask={handleCreateTask} />}

        <TaskList tasks={tasks} />
      </div>
    </>
  );
}

export default TaskBoard;
