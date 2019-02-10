import React from "react";
import ReactDOM from "react-dom";
import Reddit from "./Reddit";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Fetch Data Exercise</h1>
      <Reddit />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
