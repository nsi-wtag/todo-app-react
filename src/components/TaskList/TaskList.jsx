import TaskCard from "src/components/TaskCard/TaskCard";

function TaskList({ tasks }) {
  return tasks.map((task) => <TaskCard task={task} key={task.taskId} />);
}

export default TaskList;
