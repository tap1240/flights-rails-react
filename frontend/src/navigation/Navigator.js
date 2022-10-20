import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AirLines from "../pages/Airlines/Airlines";
import Airline from "../pages/Airline/Airline";

export default function Navigator() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AirLines />} />
        <Route exact path="/airlines/:slug" element={<Airline />} />
      </Routes>
    </Router>
  );
}
