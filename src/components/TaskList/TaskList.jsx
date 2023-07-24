import TaskCard from "src/components/TaskCard/TaskCard";

function TaskList({ tasks }) {
  return tasks.map((task) => (
    <TaskCard
      taskTitle={task.taskTitle}
      createdAt={task.createdAt}
      taskDoneAt={task.taskDoneAt}
      isTaskDone={task.isTaskDone}
      taskId={task.taskId}
      key={task.taskId}
    />
  ));
}

export default TaskList;
