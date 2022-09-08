import logobody from '../../../images/logo_dog_body1.svg';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';
import React from 'react';
import RwdMenu from '../Menu/RwdMenu';
import './_Header.scss';
import MenuLink from '../Menu/MenuLink';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { AiOutlineUser } from 'react-icons/ai';

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
          <ul className="header_container list-unstyled d-flex  mt-3">
            <MenuLink />
            {/* <Link to="123" className="header_product mx-3">
              住宿
            </Link>
            <Link to="/" className="header_product mx-3">
              景點 & 玩樂
            </Link>
            <Link to="/" className="header_product mx-3">
              餐廳
            </Link>
            <Link to="/" className="header_product mx-3">
              寵物商品
            </Link>
            <Link to="/travel" className="header_product mx-3">
              我的行程
            </Link>
            <Link to="/" className="header_product mx-3">
              社群分享
            </Link> */}
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
    </div>
  );
};
export default Header;
