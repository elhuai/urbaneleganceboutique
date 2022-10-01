import React from 'react';
import { Outlet } from 'react-router-dom';
import { useUserInfo } from '../../../hooks/useUserInfo'; // = 引入 context
import { handleLoginCard } from '../../../utils/handler/handleInputCard'; // = 引入註冊登入卡
import AdminCenter from '../../AdminCenter/AdminCenter';
import Loading from '../Loading'; // = loading 元件
import './_AdminCenterPage.scss';
const AdminCenterPage = () => {
  const { user, setUser } = useUserInfo(); // = 取得 context

  // = 判斷是否有登入狀態，如果沒有就只顯示轉圈圈以及跳出註冊登入卡
  if (!user.auth) {
    handleLoginCard({ isLogin: true, strict: true }, setUser);
    return <Loading />;
  }

  // = 如果都沒有問題就 return 正常頁面
  return (
    <div
      style={{ minHeight: '680px' }}
      className="admin_follower_position d-flex justify-content-center"
    >
      <AdminCenter />
      <Outlet />
    </div>
  );
};

export default AdminCenterPage;
