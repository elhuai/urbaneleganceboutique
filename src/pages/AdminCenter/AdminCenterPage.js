import AdminCenter from '../../components/AdminCenter/AdminCenter';
import CommunityManagement from '../../components/CommunityManagement/CommunityManagement';
// import { Link } from 'react-router-dom';
import React from 'react';
import './_AdminCenterPage.scss';

const AdminCenterPage = () => {
  return (
    <div
      style={{ minHeight: '' }}
      className="admin_follower_position d-flex justify-content-center"
    >
      <AdminCenter />
      <CommunityManagement />
    </div>
  );
};

export default AdminCenterPage;
