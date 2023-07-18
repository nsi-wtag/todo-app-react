import PropTypes from "prop-types";
import { formatDate } from "@utils/formatDate";
import "./TaskCard.scss";

function TaskCard({ title, createdAt }) {
  return (
    <div className="tasks-container__box">
      <h3>{title}</h3>
      <p>Created At: {formatDate(createdAt)}</p>
    </div>
  );
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
};

export default TaskCard;
