import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Homepage from './pages/HomePage';
import Travel from './pages/Travel';
import AdminCenter from './components/layout/AdminCenter';
import CommunityList from './pages/CommunityList';
import CommunityHomePage from './pages/CommunityHomePage';
import CommunityManagement from './pages/CommunityManagement';
import Travelmap from './pages/Travel_map';
import LineLogin from './pages/LineLogin';
import { UserInfoProvider } from './hooks/useUserInfo';
import ExamplePage from './pages/ExamplePage/ExamplePage';

import PersonalHomePage from './components/layout/AdminCenter/PersonalHomePage';
import Post from './pages/PostManagement/Post';
import PostTrip from './pages/PostManagement/PostTrip';
import PostEdit from './pages/PostManagement/PostEdit';
import PostTripEdit from './pages/PostManagement/PostTripEdit';
import AdminCenterPage from './components/AdminCenter/AdminCenter';
import EcEnjoyHomepage from './pages/Ecommerce/EC_HomePage/EC_2Enjoy_Homepage';
import EcRestaurantHomepage from './pages/Ecommerce/EC_HomePage/EC_3Restaurant_Homepage';
import EcCommodityHomepage from './pages/Ecommerce/EC_HomePage/EC_4Commodity_Homepage';
import EcProductDetail from './pages/Ecommerce/ProductDetail';
import EcProductFilter from './pages/Ecommerce/EC_productFilter';
import ECOrderSteps from './pages/Ecommerce/EC_checkout';
import 'swiper/scss';
import 'swiper/css/bundle';
import '@reach/combobox/styles.css';
import './styles/style.scss';
import AdminVocherPage from './pages/AdminVocherPage';

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
            <Route path="profile" element={<AdminVocherPage />} />
            <Route path="voucher" element={<AdminVocherPage />} />
            <Route path="community" element={<CommunityManagement />} />
          </Route>
          {/* <Route path="/adminCenter" element={<AdminCenterPage />} /> */}
          <Route path="/personalHomePage" element={<PersonalHomePage />} />
          <Route path="/postWYSIWYG" element={<Post />} />
          <Route path="/postWYSIWYGEdit" element={<PostEdit />} />
          <Route path="/postTrip" element={<PostTrip />} />
          <Route path="/postTripEdit" element={<PostTripEdit />} />
          {/* <Route path="/login/line" element={<LineLogin />} /> */}
          <Route path="/ec-productfilter" element={<EcProductFilter />} />
          <Route path="/ec-productdetail" element={<EcProductDetail />} />
          <Route
            path="/ec-restauranthomepage"
            element={<EcRestaurantHomepage />}
          />
          <Route
            path="/ec-commodityhomepage"
            element={<EcCommodityHomepage />}
          />
          <Route path="/ec-enjoyhomepage" element={<EcEnjoyHomepage />} />
          <Route path="ec-ordersteps" element={<ECOrderSteps />} />
        </Routes>
        <Outlet />

        <Footer />
      </UserInfoProvider>
    </div>
  );
}

export default App;
