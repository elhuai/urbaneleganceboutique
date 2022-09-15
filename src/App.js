import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Homepage from './pages/HomePage';
import ExamplePage from './pages/ExamplePage';
import Travel from './pages/Travel';
import CommunityList from './pages/Community/';
import AdminCenterPage from './pages/AdminCenter/AdminCenterPage';
import Travelmap from './pages/Travel_map';
import Login from './pages/Login/Login';
import { UserInfoProvider } from './hooks/useUserInfo';

import 'swiper/css/bundle';
import './styles/style.scss';

function App() {
  return (
    <div className="app">
      <UserInfoProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="example" element={<ExamplePage />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/Travel_map" element={<Travelmap />} />
          <Route path="/communitylist" element={<CommunityList />} />
          <Route path="/adminCenter" element={<AdminCenterPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </UserInfoProvider>
    </div>
  );
}

export default App;
