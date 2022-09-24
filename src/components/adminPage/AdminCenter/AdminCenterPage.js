import React from 'react';
import { Outlet } from 'react-router-dom';
import { useUserInfo } from '../../../hooks/useUserInfo'; // = 引入 context
import { handleWarning } from '../../../utils/handler/card/handleStatusCard'; // = 引入註冊登入卡
import AdminCenter from '../AdminCenterSideBar/AdminCenter';
import Loading from '../../layout/Loading'; // = loading 元件
import './_AdminCenterPage.scss';
const AdminCenterPage = () => {
  const { user, setUser } = useUserInfo(); // = 取得 context

  // = 判斷是否有登入狀態，如果沒有就只顯示轉圈圈以及跳出註冊登入卡

  if (!user.auth) {
    handleWarning('由於您未登入<br>平台將為您跳轉至首頁', '/');
    return <Loading />;
  }

  // = 如果都沒有問題就 return 正常頁面
  return (
    <div
      style={{ minHeight: '680px' }}
      className="admin_main d-flex justify-content-center"
    >
      <AdminCenter />
      <Outlet />
    </div>
  );
};

export default AdminCenterPage;
