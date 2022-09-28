import React, { useEffect, useState } from 'react';
import OrderList from '../../components/adminPage/OrderList';

import './_adminOrderListPage.scss';
const AdminOrderListPage = () => {
  return (
    <div className="d-flex flex-fill">
      <div className="flex-fill">
        <div className="admin_main_content">
          <h2>訂單管理</h2>
          <hr />
          <div className="order_content">
            <OrderList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderListPage;
