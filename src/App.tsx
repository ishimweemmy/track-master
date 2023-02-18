import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Settings from "./components/Settings";
import Home from "./components/Home/Home";
import Data from "./components/Data/Data";
import Resources from "./components/Resources";
import Credits from "./components/Credits";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="data" element={<Data />} />
            <Route path="resources" element={<Resources />} />
            <Route path="Credits" element={<Credits />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
