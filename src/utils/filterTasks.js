import { ALL, COMPLETE, INCOMPLETE } from "src/store/filter/types/filterTypes";

export default function filterTasks(tasks, filterState = ALL) {
  switch (filterState) {
    case ALL: {
      return tasks;
    }
    case INCOMPLETE: {
      return tasks.filter((task) => task.isTaskDone === false);
    }
    case COMPLETE: {
      return tasks.filter((task) => task.isTaskDone === true);
    }
  }
}
