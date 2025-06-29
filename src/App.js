import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cover from './pages/Cover';
import SajuInput from './pages/SajuInput';
import Loading from './pages/Loading';
import TreeResult from './pages/TreeResult';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/input" element={<SajuInput />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/result/tree" element={<TreeResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 