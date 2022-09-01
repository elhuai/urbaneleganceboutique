
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Homepage from './pages/HomePage';
import CommunityList from './pages/Community/';
import AdminCenterPage from "./pages/AdminCenter/AdminCenterPage";
import './styles/style.scss';

// import Travel from './pages/Travel';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/communitylist" element={<CommunityList />} />
        <Route path="/adminCenter" element={<AdminCenterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
