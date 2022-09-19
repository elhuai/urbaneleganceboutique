import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Homepage from './pages/HomePage';
import ExamplePage from './pages/ExamplePage';
import Travel from './pages/Travel';
import AdminCenter from './components/layout/AdminCenter';
import CommunityList from './pages/CommunityList';
import CommunityHomePage from './pages/CommunityHomePage';
import CommunityManagement from './pages/CommunityManagement';
import Travelmap from './pages/Travel_map';
import LineLogin from './pages/LineLogin';
import { UserInfoProvider } from './hooks/useUserInfo';

import PersonalHomePage from './pages/AdminCenter/PersonalHomePage';
import PostWYSIWYG from './pages/PostManagement/PostWYSIWYG';
import PostTrip from './pages/PostManagement/PostTrip';
import PostWYSIWYGEdit from './pages/PostManagement/PostWYSIWYGEdit';
import PostTripEdit from './pages/PostManagement/PostTripEdit';
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
          <Route path="/communityList" element={<CommunityList />} />
          <Route path="/communityHomePage" element={<CommunityHomePage />} />
          <Route path="admin" element={<AdminCenter />}>
            <Route index element={<CommunityManagement />} />
          </Route>
          {/* <Route path="/adminCenter" element={<AdminCenterPage />} /> */}
          <Route path="/personalHomePage" element={<PersonalHomePage />} />
          {/* <Route path="/AdminCenterPage" element={<AdminCenterPage />} /> */}
          <Route path="/postWYSIWYG" element={<PostWYSIWYG />} />
          <Route path="/postWYSIWYGEdit" element={<PostWYSIWYGEdit />} />
          <Route path="/postTrip" element={<PostTrip />} />
          <Route path="/postTripEdit" element={<PostTripEdit />} />
          <Route path="/login/line" element={<LineLogin />} />
        </Routes>
        <Footer />
      </UserInfoProvider>
    </div>
  );
}

export default App;
