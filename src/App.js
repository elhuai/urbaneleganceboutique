import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Homepage from './pages/HomePage';
import ExamplePage from './pages/ExamplePage';
import Travel from './pages/Travel';
import CommunityList from './pages/CommunityList';
import CommunityHomePage from './pages/CommunityHomePage';
import AdminCenterPage from './pages/AdminCenter/AdminCenterPage';
import Travelmap from './pages/Travel_map';
import { UserInfoProvider } from './hooks/useUserInfo';

import 'swiper/css/bundle';
import './styles/style.scss';
import PersonalHomePage from './pages/AdminCenter/PersonalHomePage';
import PostWYSIWYG from './pages/PostManagement/PostWYSIWYG';
import PostTrip from './pages/PostManagement/PostTrip';
import PostWYSIWYGEdit from './pages/PostManagement/PostWYSIWYGEdit';
import PostTripEdit from './pages/PostManagement/PostTripEdit';

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
          <Route path="/communityList" element={<CommunityList />} />
          <Route path="/communityHomePage" element={<CommunityHomePage />} />
          <Route path="/adminCenter" element={<AdminCenterPage />} />
          <Route path="/personalHomePage" element={<PersonalHomePage />} />
          <Route path="/AdminCenterPage" element={<AdminCenterPage />} />
          <Route path="/postWYSIWYG" element={<PostWYSIWYG />} />
          <Route path="/postWYSIWYGEdit" element={<PostWYSIWYGEdit />} />
          <Route path="/postTrip" element={<PostTrip />} />
          <Route path="/postTripEdit" element={<PostTripEdit />} />
        </Routes>
        <Footer />
      </UserInfoProvider>
    </div>
  );
}

export default App;
