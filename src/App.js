import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import './styles/animations.css';
import './styles/courses.css';
// import { Home, Registration, Gallery, Schedule, Exhibitions } from './pages/Home';
import Home from './pages/Home';
import Registration from './pages/Registration'
import Gallery from './pages/Gallery'
import Schedule from './pages/Schedule'
import Exhibitions from './pages/Exhibitions'

import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscricoes" element={<Registration />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/cronograma" element={<Schedule />} />
          <Route path="/exposicoes" element={<Exhibitions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

