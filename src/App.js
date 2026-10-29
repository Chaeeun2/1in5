import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Cover from './pages/Cover';
import SajuInput from './pages/SajuInput';
import Loading from './pages/Loading';
import TreeResult from './pages/TreeResult';
import FireResult from './pages/FireResult';
import SoilResult from './pages/SoilResult';
import MetalResult from './pages/MetalResult';
import WaterResult from './pages/WaterResult';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/input" element={<SajuInput />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/result/tree" element={<TreeResult />} />
          <Route path="/result/fire" element={<FireResult />} />
          <Route path="/result/soil" element={<SoilResult />} />
          <Route path="/result/metal" element={<MetalResult />} />
          <Route path="/result/water" element={<WaterResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 