import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Settings from "./components/Settings";
import Home from "./components/Home";
import Data from "./components/Data";
import Resources from "./components/Resources";
import Credits from "./components/Credits";
import SignUp from "./pages/auth/SignUp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/settings" element={<Settings />} />
        <Route path="" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/Credits" element={<Credits />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);
