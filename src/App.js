import React from "react";
import "@fontsource/poppins";
import "./App.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events" element={<Events />} />
          {/* <Route exact path="/about/us" element={} /> */}
          {/* <Route exact path="/team" element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
