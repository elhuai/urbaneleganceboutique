import AdminCenter from '../../components/layout/adminCenter/AdminCenter';
import FollowerManagement from '../../components/layout/followerManagement/FollowerManagement';
// import { Link } from 'react-router-dom';
import React from 'react';

const AdminCenterFollower = () => {
  return <div style={{ minHeight: '50vh' }} className="d-flex">
    <AdminCenter></AdminCenter>
    <FollowerManagement></FollowerManagement>
    
  </div>;
};

export default AdminCenterFollower;
