import React from 'react';
import { NavLink } from 'react-router-dom';
const MenuLink = () => {
  return (
    <>
      <ul className="header_container list-unstyled d-flex  mt-3">
        <NavLink to="/ec-productfilter" className="header_product mx-3">
          住宿
        </NavLink>
        <NavLink to="Travel_map" className="header_product mx-3">
          景點&玩樂
        </NavLink>
        <NavLink
          to="/ec-restauranthomepage"
          className="header_product mx-xxl-3"
        >
          餐廳
        </NavLink>
        <NavLink to="/ec-commodityhomepage" className="header_product mx-xxl-3">
          寵物商品
        </NavLink>
        <NavLink to="/travel" className="header_product mx-xxl-3">
          我的行程
        </NavLink>
        <NavLink to="communitylist" className="header_product mx-xxl-3">
          社群分享
        </NavLink>
      </ul>
    </>
  );
};

export default MenuLink;
