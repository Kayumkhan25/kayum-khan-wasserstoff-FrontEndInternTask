// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CodingCostPage from './pages/CodingCost';
import CodingConfTicketPage from './pages/CodingConfTicket';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/coding-cost" className="text-blue-500 hover:underline">Coding Cost</Link>
            </li>
            <li>
              <Link to="/coding-conf-ticket" className="text-blue-500 hover:underline">Coding Conf Ticket</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/coding-cost" element={<CodingCostPage />} />
          <Route path="/coding-conf-ticket" element={<CodingConfTicketPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;