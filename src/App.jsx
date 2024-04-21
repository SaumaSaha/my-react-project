import Concepts from "./components/Concepts";
import Logos from "./components/Logos";
import ReactiveComponent from "./components/ReactiveComponent";

import "./App.css";

function App() {
  return (
    <div>
      <Logos />
      <main>
        <ReactiveComponent />
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
