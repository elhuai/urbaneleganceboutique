import React from 'react';
import { Outlet } from 'react-router-dom';
import CommunityManagement from '../../../pages/CommunityManagement';
import AdminCenter from '../../AdminCenter/AdminCenter';
import './_AdminCenterPage.scss';
const AdminCenterPage = () => {
  return (
    <div
      style={{ minHeight: '680px' }}
      className="admin_follower_position d-flex justify-content-center"
    >
      <AdminCenter />
      {/* <CommunityManagement /> */}
      <Outlet />
    </div>
  );
};

export default AdminCenterPage;
