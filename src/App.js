import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Landing Page/Navbar';
import LandingPage from './pages/Landing Page/LandingPage';

function App() {
  return (
    <Router>
      {/* Navbar is outside Routes so it renders on all pages */}
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
