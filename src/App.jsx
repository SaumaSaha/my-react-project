import { useState } from "react";
import Concepts from "./components/Concepts";
import Logos from "./components/Logos";

import "./App.css";

const descriptions = ["learn", "know", "built", "create"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

function App() {
  const [count, setCount] = useState(0);

  const description = descriptions[getRandomNumber(4)];

  return (
    <div>
      <Logos />
      <main>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to {description} more
        </p>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Concepts />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
