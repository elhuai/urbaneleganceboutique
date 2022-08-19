import React from 'react';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
