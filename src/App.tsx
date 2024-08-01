import reactLogo from "./assets/react.svg";

import "./App.css";
import LogList from "./components/log-list/logList";
import { useState } from "react";

type layerType = "logs" | "new-log";

function App() {
  const [layer, setLayer] = useState<layerType>("logs");
  return (
    <>
      {/* Header */}
      <header className="header">
        <img src={reactLogo} className="logo react" alt="React logo" />

        <h1>Logs from MongoDB</h1>

        <div className="header-actions">
          <button onClick={() => setLayer("logs")}>$ Logs</button>
          <button onClick={() => setLayer("new-log")}>+ Nuevo</button>
        </div>
      </header>

      {/* Sections */}
      {layer === "logs" && <LogList />}
      {layer === "new-log" && <p>Nuevo</p>}
    </>
  );
}

export default App;
