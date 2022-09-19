import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import LoginCard from '../../components/layout/LoginCard/';
import SocialNameEditCard from '../../components/layout/SocialNameEditCard';
import { handleSuccess } from './handleStatusCard';

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
          timer: 1500,
        });
    });
};

export const handleSocialNameEditCard = (setUser) => {
  inputCardFire(false);
  function inputCardFire(isUserSkip) {
    const inputCard = withReactContent(Swal);
    inputCard
      .fire({
        html: (
          <SocialNameEditCard
            confirm={inputCard.clickConfirm}
            isUserSkip={isUserSkip}
            setUser={setUser}
          />
        ),
        showConfirmButton: false,
      })
      .then((result) => {
        console.log(result);
        if (!result.isConfirmed) inputCardFire(true);
        if (result.isConfirmed) {
          handleSuccess(
            'LINE 連動登入成功',
            window.localStorage.getItem('last_page')
          );
          window.localStorage.removeItem('last_page');
          window.localStorage.removeItem('line_login');
        }
      });
  }
};
