import logobody from '../../../images/logo_dog_body1.svg';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';
import React from 'react';
import RwdMenu from '../Menu/RwdMenu';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './_Header.scss';
import MenuLink from '../Menu/MenuLink';

const Header = () => {
  return (
    <div className="header_main_Body fixed-top">
      <div className="header_main d-flex justify-content-between ">
        <Link to="/" className="  d-block header_menu">
          <img className=" header_dog-logo " src={logobody} alt="dog" />
        </Link>
        <div className="header_mobile_menu">
          <RwdMenu />
        </div>
        <div className="header_tittle d-flex justify-content-center align-items-center w-100 flex-shrink-1">
          <MenuLink />

          <div className="  d-flex header_Icon align-items-center justify-content-end ">
            <Link to="/ec-ordersteps" className="header_Icon_cart">
              <IoCart />
            </Link>
            {/* TODO: ICON更改 */}
            <Link to="/adminCenter" className="header_Icon_user">
              {/* <HiUser /> */}
              <FaUser />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
