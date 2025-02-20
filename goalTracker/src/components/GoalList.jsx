import PropTypes from "prop-types";
import GoalItem from "./GoalItem";

export default function GoalList({ goal }) {
  console.log(goal);
  return (
    <section>
      <h2>Your Goals</h2>
      <ul>{goal && goal.map((go) => <GoalItem key={1} goal={go} />)}</ul>
    </section>
  );
}

GoalList.propTypes = {
  goal: PropTypes.func.isRequired,
};
