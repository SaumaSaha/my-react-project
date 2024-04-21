import { useState } from "react";

const descriptions = ["learn", "know", "built", "create"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const ReactiveComponent = () => {
  const [count, setCount] = useState(0);

  const description = descriptions[getRandomNumber(4)];

  return (
    <div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to {description} more
      </p>
    </div>
  );
}

export default ReactiveComponent;
