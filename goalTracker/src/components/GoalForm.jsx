// import { useState } from "react";
import { useState } from "react";
import "../index.css";
import PropTypes from "prop-types";

export default function GoalForm({ onClickSetGoal }) {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onClickSetGoal(input);
    setInput("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="goalInput"
        name="goal"
        placeholder="Enter your goal..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

GoalForm.propTypes = {
  onClickSetGoal: PropTypes.func.isRequired,
};
