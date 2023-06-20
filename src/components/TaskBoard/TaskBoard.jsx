import { useSelector } from "react-redux";
import TaskCard from "../TaskCard/TaskCard";
import TaskNavBar from "../TaskNavBar/TaskNavBar";
import "./TaskBoard.scss";

function TaskBoard() {
  const tasks = useSelector((state) => state.todo.tasks);

  return (
    <>
      <TaskNavBar />
      <div className="grid-container">
        {tasks.map((task) => (
          <TaskCard
            title={task.title}
            createdAt={task.createdAt}
            key={task.id}
          />
        ))}
      </div>
    </>
  );
}

export default TaskBoard;
