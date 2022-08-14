import React from 'react';
import logobody from '../images/logo_dog-body.svg';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
  return (
    <div>
      <div className="header_main d-flex justify-content-between mt-2">
        <Link to="/" className="  d-block   ">
          <div className="header_mobile_menu">選單</div>
          <img className=" header_dog-logo " src={logobody} alt="dog" />
        </Link>
        <div className="header_tittle d-flex justify-content-center align-items-center">
          <ul className="header_container list-unstyled d-flex  mt-3">
            <Link to="/" className="header_product mx-3">
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
            <Link to="/" className="header_product mx-3">
              我的行程
            </Link>
            <Link to="/" className="header_community mx-3">
              社群分享
            </Link>
          </ul>
        </div>
        <div className=" d-flex header_Icon ">
          <Link to="/" className="">
            <AiOutlineUser />
          </Link>
          <Link to="/" className="header_Icon_cart">
            <AiOutlineShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
