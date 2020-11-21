import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login, Register } from "./modules/auth/pages";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
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
