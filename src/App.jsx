import React from "react";
import Dashboard from "./components/Dashboard.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">🌟 Dynamic Dashboard</h1>
      <SearchBar />
      <Dashboard />
    </div>
  );
}

export default App;
