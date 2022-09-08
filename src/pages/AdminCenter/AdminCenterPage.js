import AdminCenter from '../../components/adminCenter/AdminCenter';
import CommunityManagement from '../../components/CommunityManagement/CommunityManagement';
// import { Link } from 'react-router-dom';
import React from 'react';

const AdminCenterPage = () => {
  return (
    <div
      style={{ minHeight: '680px' }}
      className="admin_follower_position d-flex justify-content-center"
    >
      <AdminCenter />
      <CommunityManagement />
    </div>
  );
};

export default AdminCenterPage;
