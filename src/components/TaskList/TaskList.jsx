import TaskCard from "src/components/TaskCard/TaskCard";

function TaskList({ tasks }) {
  return tasks.map((task) => (
    <TaskCard
      taskTitle={task.taskTitle}
      createdAt={task.createdAt}
      key={task.id}
    />
  ));
}

export default TaskList;
