import { useState } from "react";

import "./App.css";
import "./index.css";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";

function App() {
  const [goal, setGoal] = useState([]);

  function handleSetGoal(goal) {
    setGoal((goals) => [...goals, goal]);
  }
  console.log(goal);
  return (
    <>
      <main className="container">
        <header className="h1">Goal Tracker</header>
        <section>
          <GoalForm onClickSetGoal={handleSetGoal} />
        </section>
        <section>
          <GoalList goal={goal} />
        </section>
      </main>
    </>
  );
}

export default App;
