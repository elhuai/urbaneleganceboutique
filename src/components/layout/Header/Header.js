import logobody from '../../../images/logo_dog_body1.svg';
import { IoLogOut } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import RwdMenu from '../Menu/RwdMenu';
import MenuLink from '../Menu/MenuLink';
import {
  handleLoginCard,
  handleResetPwdCard,
} from '../../../utils/handler/card/handleInputCard';
import { useUserInfo } from '../../../hooks/useUserInfo';
import './_Header.scss';
import { resetPassword } from '../../../api/userApi';
import { callLineLoginApi } from '../../../api/authApi';
import { handleFailed } from '../../../utils/handler/card/handleStatusCard';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const Header = () => {
  const { user, setUser } = useUserInfo();
  const [searchParam] = useSearchParams();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [resetPwd, setResetPwd] = useState(false);

  const logoutRedirect = window.location.pathname.includes('admin');
  const AuthBtn = () => {
    if (user.auth) {
      return (
        <>
          <Link to="/admin/profile" className="header_Icon_user">
            <FaUser />
          </Link>
          <div
            className="header_Icon_logout"
            onClick={() =>
              handleLoginCard(
                { isLogin: false, logoutRedirect: logoutRedirect },
                setUser
              )
            }
          >
            <IoLogOut />
          </div>
        </>
      );
    }
    return (
      <div
        className="header_Icon_user"
        onClick={() => handleLoginCard({ isLogin: true }, setUser)}
      >
        <FaUser />
      </div>
    );
  };
  const redirectPath = window.localStorage.getItem('last_page');

  useEffect(() => {
    // = line 驗證
    if (
      searchParam.get('line_login') &&
      searchParam.get('code') &&
      searchParam.get('state') === 'ohdogcat_Line_Login' &&
      window.localStorage.getItem('line_login')
    ) {
      const lineVerifyCode = searchParam.get('code');
      console.log('first', user.firstVerify, 'user.auth', user.auth);
      if (
        !user.auth &&
        user.firstVerify &&
        window.location.search.includes('line_login')
      ) {
        callLineLoginApi(lineVerifyCode, setUser, redirectPath);
      }
    } else {
      if (searchParam.get('line_login') === 'false') {
        handleFailed('LINE 連動登入失敗');
      }
    }
    // = password reset 驗證
    if (searchParam.get('reset_code')) {
      console.log('reset', searchParam.get('reset_code'));
      handleResetPwdCard(searchParam.get('reset_code'), setUser, navigate);
    }
  }, []);
  return (
    <div className="header_main_body fixed-top">
      <div className="header_main d-flex justify-content-between position-relative">
        <Link to="/" className="d-block header_menu">
          <img className=" header_dog-logo " src={logobody} alt="dog" />
        </Link>
        <div className="header_tittle d-flex justify-content-center align-items-center w-100 flex-shrink-1">
          <ul className="header_container list-unstyled d-flex m-0">
            <MenuLink />
          </ul>
        </div>
        <div className="d-flex header_Icon align-items-center justify-content-end ">
          <ShoppingCart
            placement={'end'}
            name={'end'}
            cart={cart}
            setCart={setCart}
          />
          {/* TODO: ICON更改 */}
          <AuthBtn />
        </div>
      </div>
      <div className="header_mobile_menu">
        <RwdMenu />
      </div>
    </div>
  );
};
export default Header;
