import "./adminCenter.css";

import { AiOutlineSetting } from "react-icons/ai";
import CommunityIcon from "../../../images/users-svgrepo-com.svg";
import LikeIcon from "../../../images/star-svgrepo-com.svg";
import { Link } from "react-router-dom";
import MessageIcon from "../../../images/message-svgrepo-com.svg";
import OrderIcon from "../../../images/choices-order-svgrepo-com.svg";
import React from "react";
import TicketIcon from "../../../images/coupon-svgrepo-com (2).svg";
import UserPhoto from "../../../images/logo_dog_body1.svg";

// import { ReactComponent as OrderIcon } from '../';

// import {Button} from 'react-bootstrap';

const AdminCenter = () => {
  return (
    <div>
      <div className="admin_sidebar d-flex justify-content-between">
        {/* <Link to="/" className="  d-block header_menu">
          <div className="header_mobile_menu">選單一</div>
          <img className=" header_dog-logo " src={logobody} alt="dog" />
        </Link> */}
        {/* RWD 效果 */}
        <div className="admin_side">
          <div className="profile_bar d-flex">
            <div className="user_photobox">
              <img
                className="admin_user_photo w-100 h-100"
                src={UserPhoto}
                alt=""
              ></img>
            </div>

            <div className="admin_user_name_bar">
              <p className="admin_user_name">User NAME</p>
              <Link to="/" className="text-decoration-none admin_myfile">
                <AiOutlineSetting className="settingicon admin_my_profile_text "></AiOutlineSetting>
                我的檔案
              </Link>
            </div>
          </div>
          <ul className="admin_sidemenu list-unstyled ">
            <li>
              <Link
                to="/"
                className="text-decoration-none admin_select d-flex "
              >
                <img className="icons " src={OrderIcon} alt="orderIcon"></img>
                <p>我的訂單</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="text-decoration-none admin_select d-flex">
                <img className="icons" src={LikeIcon} alt="likeIcon"></img>
                <p>我的收藏</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="admin_select text-decoration-none d-flex">
                <img className="icons" src={TicketIcon} alt="ticketIcon"></img>
                <p>我的票券</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="admin_select text-decoration-none d-flex">
                <img
                  className="icons"
                  src={MessageIcon}
                  alt="messageIcon"
                ></img>
                <p>訊息管理</p>
              </Link>
            </li>
            <li>
              <Link
                to="/adminCenter"
                className="text-decoration-none admin_select  d-flex"
              >
                <img
                  className="icons"
                  src={CommunityIcon}
                  alt="communityIcon"
                ></img>
                <p>社群設定</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AdminCenter;
