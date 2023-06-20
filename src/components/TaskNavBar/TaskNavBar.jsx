import "./TaskNavBar.scss";
import { addTask } from "../../store/todo/actions/todoActions";
import { useDispatch } from "react-redux";

function TaskNavBar() {
  const dispatch = useDispatch();

  const todo = {
    id: Date.now(),
    task: "Todo 9",
  };

  function handleCreate(todo) {
    dispatch(addTask(todo));
  }

  return (
    <>
      <h2>Add Tasks</h2>
      <nav className="navbar">
        <button className="navbar__button" onClick={() => handleCreate(todo)}>
          Create
        </button>
        <div className="navbar__filters">
          <button className="navbar__filter">All</button>
          <button className="navbar__filter">Incomplete</button>
          <button className="navbar__filter">Complete</button>
        </div>
      </nav>
    </>
  );
}

export default TaskNavBar;
