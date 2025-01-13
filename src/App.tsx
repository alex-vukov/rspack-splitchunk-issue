import "./App.css";
import { fill } from "lodash";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      {fill(Array(10), "Test")}
    </div>
  );
};

export default App;
