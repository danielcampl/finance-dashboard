import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Itau from "./pages/Banks/Itau";
import Nubank from "./pages/Banks/Nubank";
import Amazon from "./pages/Banks/Amazon";
import Inter from "./pages/Banks/Inter";
import Picpay from "./pages/Banks/Picpay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Itau" element={<Itau />} />
        <Route path="/Nubank" element={<Nubank />} />
        <Route path="/Amazon" element={<Amazon />} />
        <Route path="/Inter" element={<Inter />} />
        <Route path="/Picpay" element={<Picpay />} />
      </Routes>
    </Router>
  );
}

export default App;
