import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Bank from "./components/banks/Bank";
import Expenses from "./components/Expenses";
// import Investments from "./components/Investments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/expenses" exact element={<Expenses />} />
        {/* <Route path="/investments" exact element={<Investments />} /> */}
        <Route path="/itau" exact element={<Bank transaction='transactionsItau' name='Itau' />} />
        <Route path="/nubank" exact element={<Bank transaction='transactionsNubank' name='Nubank' />} />
        <Route path="/amazon" exact element={<Bank transaction='transactionsAmazon' name='Amazon' />} />
        <Route path="/inter" exact element={<Bank transaction='transactionsInter' name='Inter' />} />
        <Route path="/picpay" exact element={<Bank transaction='transactionsPicpay' name='Picpay' />} />
        <Route path="/c6" exact element={<Bank transaction='transactionsC6' name='C6 Bank' />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
