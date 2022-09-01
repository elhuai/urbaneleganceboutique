import { Route, Routes } from 'react-router-dom';

import AdminCenterFollower from './pages/AdminCenter/AdminCenterFollower';
// import ExamplePage from './pages/ExamplePage';
import Footer from './components/layout/Footer';
import CommunityList from './pages/Community/';
import Header from './components/layout/Header';
import Homepage from './pages/HomePage';
import React from 'react';

import './styles/style.scss';

// import Travel from './pages/Travel';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/communitylist" element={<CommunityList />} />
        <Route path="/adminCenter" element={<AdminCenterFollower />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
