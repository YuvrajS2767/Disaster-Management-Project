import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Alerts from './pages/Alerts';
import Resources from './pages/Resources';
import Forum from './pages/Forum';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </div>
  );
}

export default App;
