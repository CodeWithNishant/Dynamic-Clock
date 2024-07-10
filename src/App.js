import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Onboarding from "./Components/Onboarding";
import Login from "./Components/Login";
import Register from "./Components/Register";
import TrackingScreen from "./Components/TrackingScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="track" element={<TrackingScreen />} />
        <Route path="/" element={<Onboarding />} />
        <Route path="/Dynamic-Clock" element={<Onboarding />} />
      </Routes>
    </Router>
  );
}

export default App;
