import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Login, Register } from "./modules/auth/pages";
import { TaskList } from "./modules/tasks/pages/Task-List";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        <TaskList />
        <img src={logo} className="App-logo" alt="logo" />
        <Register />
        <br />
        <Login />
        <div style={{ display: "flex" }}></div>
      </header>
    </div>
  );
}

export default App;
