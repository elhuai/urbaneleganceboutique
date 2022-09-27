import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSocket } from '../../hooks/useSocket';
const AdminMessageListPage = () => {
  const { socket } = useSocket();
  const [message, setMessage] = useState('');

  const handleBtn = () => {
    socket.emit('text', 'hi');
  };

  return (
    <div className="d-flex flex-fill">
      <div className="flex-fill">
        <div className="admin_main_content">
          <h2>信件列表</h2>
          <hr />
          <button className="btn btn-brimary" onClick={handleBtn}>
            送出
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminMessageListPage;
