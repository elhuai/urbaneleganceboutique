import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import LoginCard from '../../components/layout/LoginCard/LoginCard';

export const handleLoginCard = (isLogin, setUser) => {
  const loginCard = withReactContent(Swal);
  loginCard
    .fire({
      html: (
        <LoginCard
          isLogin={isLogin}
          confirm={loginCard.clickConfirm}
          setUser={setUser}
        />
      ),
      showConfirmButton: false,
    })
    .then((result) => {
      if (result.isConfirmed)
        return loginCard.fire({
          position: 'center-center',
          icon: 'success',
          title: `${isLogin ? '登入成功' : '登出成功'}`,
          showConfirmButton: false,
          timer: 800,
        });
    });
};
