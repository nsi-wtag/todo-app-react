import TaskCard from "@components/TaskCard";

function TaskList({ tasks }) {
  return tasks.map((task) => (
    <TaskCard title={task.taskTitle} createdAt={task.createdAt} key={task.id} />
  ));
}

export default TaskList;
