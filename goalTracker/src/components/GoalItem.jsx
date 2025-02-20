import PropTypes from "prop-types";

export default function GoalItem({ goal }) {
  console.log(goal);
  return (
    <li className="goal-item">
      <span>{goal}</span>
      {/* <button onClick={() => deleteGoal(goal.id)} aria-label="Delete goal">
        ❌
      </button> */}
    </li>
  );
}

GoalItem.propTypes = {
  goal: PropTypes.func.isRequired,
};
