import React from 'react';
import logobody from '../../../images/logo_dog_body1.svg';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './_Header.scss';

const Header = () => {
  return (
    <div className="header_main_Body">
      <div className="header_main d-flex justify-content-between ">
        <Link to="/" className="  d-block header_menu">
          <div className="header_mobile_menu">選單一</div>
          <img className=" header_dog-logo " src={logobody} alt="dog" />
        </Link>
        <div className="header_tittle d-flex justify-content-center align-items-center w-100 flex-shrink-1">
          <ul className="header_container list-unstyled d-flex  mt-3">
            <Link to="123" className="header_product mx-3">
              住宿
            </Link>
            <Link to="/" className="header_product mx-3">
              景點&玩樂
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
            </Link>
          </ul>
        </div>
        <div className="  d-flex header_Icon align-items-center justify-content-end ">
          <Link to="/" className="">
            <AiOutlineShoppingCart />
          </Link>
          <Link to="/" className="header_Icon_cart">
            <AiOutlineUser />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
