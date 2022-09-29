import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import LoginCard from '../../../components/cards/LoginCard';
import SocialNameEditCard from '../../../components/cards/SocialNameEditCard';
import VoucherExchangeCard from '../../../components/cards/VoucherExchangeCard';
import PasswordEditCard from '../../../components/cards/PasswordEditCard';
import ScoreCard from '../../../components/cards/ScoreCard';
import { handleSuccess, handleFailed } from './handleStatusCard';

export const handleLoginCard = (config, setUser) => {
  loginCardFire();
  function loginCardFire() {
    const loginCard = withReactContent(Swal);
    loginCard
      .fire({
        html: (
          <LoginCard
            isLogin={config.isLogin}
            confirm={loginCard.clickConfirm}
            setUser={setUser}
          />
        ),
        showConfirmButton: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          loginCard.fire({
            position: 'center-center',
            icon: 'success',
            title: `${config.isLogin ? '登入成功' : '登出成功'}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }
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
        if (!result.isConfirm2ed) inputCardFire(true);
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

export const handleVoucherExchangeCard = (itemData) => {
  inputCardFire();
  function inputCardFire() {
    const inputCard = withReactContent(Swal);
    inputCard.fire({
      html: (
        <VoucherExchangeCard
          confirm={inputCard.clickConfirm}
          itemData={itemData}
        />
      ),
      showConfirmButton: false,
    });
  }
};

export const handlePasswordEditCard = () => {
  inputCardFire();
  function inputCardFire() {
    const inputCard = withReactContent(Swal);
    inputCard.fire({
      html: (
        <PasswordEditCard
          confirm={inputCard.clickConfirm}
          cancel={inputCard.clickCancel}
        />
      ),
      showConfirmButton: false,
    });
  }
};

export const handleScoreCard = () => {
  inputCardFire();
  function inputCardFire() {
    const inputCard = withReactContent(Swal);
    inputCard
      .fire({
        html: (
          <ScoreCard
            confirm={inputCard.clickConfirm}
            cancel={inputCard.clickCancel}
          />
        ),
        showConfirmButton: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          handleSuccess('店家已收到你提供的意見');
        }
      });
  }
};
