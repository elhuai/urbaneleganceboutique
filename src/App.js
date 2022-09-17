import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Homepage from './pages/HomePage';
import ExamplePage from './pages/ExamplePage';
import Travel from './pages/Travel';
import CommunityList from './pages/Community';
import AdminCenterPage from './pages/AdminCenter/AdminCenterPage';
import EcLivingHomepage from './pages/Ecommerce/EC_Living_Homepage';
import EcProductDetail from './pages/Ecommerce/ProductDetail'
import EcproductFilter from './pages/Ecommerce/EC_productFilter';
// import Eccheckout1 from './pages/Ecommerce/EC_checkout'
import ECOrderSteps from './pages/Ecommerce/EC_checkout'
// import Eccheckout2 from './pages/Ecommerce/EC_checkout/EC_checkout_2'
import Travelmap from './pages/Travel_map';
import '../node_modules/card-js/card-js.min.css';
import '../node_modules/card-js/card-js.min.js';
import 'swiper/scss';
import 'swiper/css/bundle';
import './styles/style.scss';

function App() { 
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="example" element={<ExamplePage />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/Travel_map" element={<Travelmap />} />
        <Route path="/communitylist" element={<CommunityList />} />
        <Route path="/adminCenter" element={<AdminCenterPage />} />
        <Route path="/ec-productfilter" element={<EcproductFilter />} />
        <Route path="/ec-productdetail" element={<EcProductDetail />} />
        <Route path="/ec-livinghomepage" element={<EcLivingHomepage />} />
        {/* <Route path="/ec-checkout1" element={<Eccheckout1 />} /> */}
        <Route path="/ec-ordersteps" element={<ECOrderSteps />} />
        {/* <Route path="/ec-checkout2" element={<Eccheckout2 />} /> */}
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
