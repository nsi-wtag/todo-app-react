export function searchTasks(query, tasks) {
  if (query) {
    return tasks.filter((task) =>
      task.taskTitle.toLowerCase().includes(query.toLowerCase())
    );
  } else {
    return tasks;
  }
}
