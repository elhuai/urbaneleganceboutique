import React from 'react';
import Footer from './components/layout/Footer';
import Homepage from './pages/HomePage';
import Header from './components/layout/Header';
import { Routes, Route } from 'react-router-dom';
import './styles/style.scss';

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
