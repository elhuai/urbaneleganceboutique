import logobody from '../../../images/logo_dog_body1.svg';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';
import React from 'react';
import RwdMenu from '../Menu/RwdMenu';
import './_Header.scss';
import MenuLink from '../Menu/MenuLink';

const Header = () => {
  return (
    <div className="header_main_body fixed-top">
      <div className="header_main d-flex justify-content-between position-relative">
        <Link to="/" className="  d-block header_menu">
          <img className=" header_dog-logo " src={logobody} alt="dog" />
        </Link>
        <div className="header_tittle d-flex justify-content-center align-items-center w-100 flex-shrink-1">
          <ul className="header_container list-unstyled d-flex m-0">
            <MenuLink />
          </ul>
        </div>
        <div className="  d-flex header_Icon align-items-center justify-content-end ">
          <Link to="/pathcut" className="header_Icon_cart">
            <IoCart />
          </Link>
          {/* TODO: ICON更改 */}
          <Link to="/adminCenter" className="header_Icon_user">
            {/* <HiUser /> */}
            <FaUser />
          </Link>
        </div>
      </div>
      <div className="header_mobile_menu">
        <RwdMenu />
      </div>
    </div>
  );
};
export default Header;
