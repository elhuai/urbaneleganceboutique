import React from 'react';
import { Outlet } from 'react-router-dom';
import { useUserInfo } from '../../../hooks/useUserInfo';
import CommunityManagement from '../../../pages/CommunityManagement';
import { handleLoginCard } from '../../../utils/handler/handleInputCard';
import AdminCenter from '../../AdminCenter/AdminCenter';
import Loading from '../Loading';
import './_AdminCenterPage.scss';
const AdminCenterPage = () => {
  const { user, setUser } = useUserInfo();
  console.log(user);
  if (!user.auth && user.firstVerify) {
    handleLoginCard({ isLogin: true, strict: true }, setUser);
  }
  return !user.auth ? (
    <Loading />
  ) : (
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
