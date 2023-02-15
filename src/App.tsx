import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Dashboard from "./pages/Dashboard";
import { Outlet } from "react-router-dom";

function App() {

  return <div className="w-screen h-screen">
    <Dashboard />
    <Outlet />
  </div>;
}

export default App;
