import logobody from '../../../images/logo_dog_body1.svg';
import { IoLogOut } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';
import React from 'react';
import { Link } from 'react-router-dom';
import RwdMenu from '../Menu/RwdMenu';
import MenuLink from '../Menu/MenuLink';
import { handleLoginBtn } from '../../../hooks/handleLoginBtn';
import { useUserInfo } from '../../../hooks/useUserInfo';
import './_Header.scss';

const Header = () => {
  const { user, setUser } = useUserInfo();
  const AuthBtn = () => {
    if (user.auth) {
      return (
        <>
          <Link to="/adminCenter" className="header_Icon_user">
            <FaUser />
          </Link>
          <div
            className="header_Icon_logout"
            onClick={() => handleLoginBtn(false, setUser)}
          >
            <IoLogOut />
          </div>
        </>
      );
    }
    return (
      <div
        className="header_Icon_user"
        onClick={() => handleLoginBtn(true, setUser)}
      >
        <FaUser />
      </div>
    );
  };

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
          <Link to="/" className="header_Icon_cart">
            <IoCart />
          </Link>
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
