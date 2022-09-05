import { AiOutlineSetting } from "react-icons/ai";
import CommunityIcon from "../../images/users-svgrepo-com.svg";
import LikeIcon from "../../images/star-svgrepo-com.svg";
import { Link } from "react-router-dom";
import MessageIcon from "../../images/message-svgrepo-com.svg";
import OrderIcon from "../../images/choices-order-svgrepo-com.svg";
import React from "react";
import TicketIcon from "../../images/coupon-svgrepo-com (2).svg";
import HoverBottom from "../../images/admin-hover-background.svg";
import "./adminCenter.scss";
// import { ReactComponent as OrderIcon } from '../';

// import {Button} from 'react-bootstrap';

const AdminCenter = () => {
  return (
    <div>
      <div className="admin_side">
        <div className="profile_bar d-flex justify-content-center">
          <div className="user_photobox">
            <img
              className="admin_user_photo w-100 h-100"
              src="https://picsum.photos/200/300?random8"
              alt=""
            ></img>
          </div>
          <div className="admin_user_name_bar">
            <Link to="/" className="admin_user_name ">
              <p>User Name</p>
            </Link>
            <Link to="/" className="text-decoration-none admin_myfile">
              <AiOutlineSetting className="settingicon admin_my_profile_text "></AiOutlineSetting>
              我的檔案
            </Link>
          </div>
        </div>
        <ul className="admin_sidemenu list-unstyled d-flex flex-column">
          <li>
            <Link
              to="/"
              src={HoverBottom}
              className="text-decoration-none icons admin_select d-flex "
            >
              <img
                className="icon_size d-block "
                src={OrderIcon}
                alt="orderIcon"
              ></img>
              <p className="d-block">我的訂單</p>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-decoration-none admin_select icons d-flex"
            >
              <img
                className="icon_size d-block"
                src={LikeIcon}
                alt="likeIcon"
              ></img>
              <p className="d-block">我的收藏</p>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="admin_select text-decoration-none icons d-flex"
            >
              <img
                className="icon_size d-block"
                src={TicketIcon}
                alt="ticketIcon"
              ></img>
              <p className="d-block">我的票券</p>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="admin_select text-decoration-none icons d-flex"
            >
              <img
                className="icon_size d-block"
                src={MessageIcon}
                alt="messageIcon"
              ></img>
              <p className="d-block">訊息管理</p>
            </Link>
          </li>
          <li>
            <Link
              to="/adminCenter"
              className="text-decoration-none admin_select icons d-flex
              community"
            >
              <img
                className="icon_size d-block"
                src={CommunityIcon}
                alt="communityIcon"
              ></img>
              <p className="d-block">社群設定</p>
            </Link>

            {/* <Link to="/" className=""><img alt="" src={HoverBottom}></img><p>tesing</p></Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AdminCenter;
