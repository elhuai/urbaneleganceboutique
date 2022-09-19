import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Homepage from './pages/HomePage';
import Travel from './pages/Travel';
import CommunityList from './pages/Community';
import AdminCenterPage from './pages/AdminCenter/AdminCenterPage';
import EcEnjoyHomepage from './pages/Ecommerce/EC_HomePage/EC_2Enjoy_Homepage';
import EcRestaurantHomepage from './pages/Ecommerce/EC_HomePage/EC_3Restaurant_Homepage';
import EcCommodityHomepage from './pages/Ecommerce/EC_HomePage/EC_4Commodity_Homepage';
import EcProductDetail from './pages/Ecommerce/ProductDetail';
import EcProductFilter from './pages/Ecommerce/EC_productFilter';
import ECOrderSteps from './pages/Ecommerce/EC_checkout';
import Travelmap from './pages/Travel_map';
import 'swiper/scss';
import 'swiper/css/bundle';
import './styles/style.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/Travel_map" element={<Travelmap />} />
        <Route path="/communitylist" element={<CommunityList />} />
        <Route path="/adminCenter" element={<AdminCenterPage />} />
        <Route path="/ec-productfilter" element={<EcProductFilter />} />
        <Route path="/ec-productdetail" element={<EcProductDetail />} />
        <Route
          path="/ec-restauranthomepage"
          element={<EcRestaurantHomepage />}
        />
        <Route path="/ec-commodityhomepage" element={<EcCommodityHomepage />} />
        <Route path="/ec-enjoyhomepage" element={<EcEnjoyHomepage />} />
        <Route path="ec-ordersteps" element={<ECOrderSteps />} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
