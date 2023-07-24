import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "src/store/task/actions/taskActions";
import { MAX_TASK_PER_PAGE } from "src/common/constants";
import TaskNavBar from "src/components/TaskNavBar/TaskNavBar";
import AddTaskCard from "src/components/AddTaskCard/AddTaskCard";
import TaskList from "src/components/TaskList/TaskList";
import "./TaskBoard.scss";

function TaskBoard() {
  const [isCreateButtonClicked, setIsCreateButtonClicked] = useState(false);
  const [visibleTaskRange, setVisibleTaskRange] = useState(MAX_TASK_PER_PAGE);
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const totalTasks = tasks.length;
  let numberOfTasksOnScreen = totalTasks;

  if (isCreateButtonClicked) {
    numberOfTasksOnScreen += 1;
  }

  const isLoadMore =
    numberOfTasksOnScreen > MAX_TASK_PER_PAGE && visibleTaskRange <= totalTasks;
  const isLoadLess =
    visibleTaskRange >= totalTasks && totalTasks > MAX_TASK_PER_PAGE;

  function showMoreItems() {
    setVisibleTaskRange((prevValue) => prevValue + MAX_TASK_PER_PAGE);
  }

  function showLessItems() {
    setVisibleTaskRange(MAX_TASK_PER_PAGE);
  }

  function handleCreateButton() {
    setIsCreateButtonClicked(!isCreateButtonClicked);
  }

  function handleCreateTask(taskTitle) {
    handleCreateButton();
    dispatch(addTask({ taskTitle: taskTitle }));
  }

  useEffect(() => {
    if (numberOfTasksOnScreen <= MAX_TASK_PER_PAGE) {
      showLessItems();
    }
  }, [numberOfTasksOnScreen]);

  return (
    <div className="tasks-board-container">
      <TaskNavBar onCreateButtonClick={handleCreateButton} />

      <div className="tasks-container">
        {isCreateButtonClicked && (
          <AddTaskCard onCreateTask={handleCreateTask} />
        )}

        <TaskList
          tasks={tasks}
          visibleTaskRange={visibleTaskRange}
          isCreateButtonClicked={isCreateButtonClicked}
        />
      </div>

      <div className="tasks-board-container__buttons-container">
        {isLoadMore && (
          <button
            className="tasks-board-container__load-button"
            onClick={showMoreItems}
          >
            Load More
          </button>
        )}
        {isLoadLess && (
          <button
            className="tasks-board-container__load-button"
            onClick={showLessItems}
          >
            Load Less
          </button>
        )}
      </div>
    </div>
  );
}

export default TaskBoard;
