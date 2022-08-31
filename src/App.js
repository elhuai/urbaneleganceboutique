import './styles/style.scss';

import { Route, Routes } from 'react-router-dom';

import AdminCenterFollower from './pages/AdminCenter/AdminCenterFollower';
// import ExamplePage from './pages/ExamplePage';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Homepage from './pages/HomePage';
import React from 'react';

// import Travel from './pages/Travel';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="example" element={<ExamplePage />} /> */}
        {/* <Route path="/travel" element={<Travel />} /> */}
        <Route path="/adminCenter" element={<AdminCenterFollower />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
