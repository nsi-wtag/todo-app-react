import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "@store/task/actions/taskActions";
import TaskActions from "@components/TaskActions";
import NewTaskCard from "@components/NewTaskCard";
import TaskList from "@components/TaskList";
import "./styles.scss";

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
      <TaskActions onCreateTask={handleCreateButton} />

      <div className="tasks-container">
        {isCreateTask && <NewTaskCard onCreateTask={handleCreateTask} />}

        <TaskList tasks={tasks} />
      </div>
    </>
  );
}

export default TaskBoard;
