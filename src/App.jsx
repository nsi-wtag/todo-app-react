import { ToastContainer, Flip } from "react-toastify";
import Header from "src/components/Header/Header";
import TaskBoard from "src/components/TaskBoard/TaskBoard";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer transition={Flip} />
      <Header />
      <TaskBoard />
    </>
  );
}

export default App;
