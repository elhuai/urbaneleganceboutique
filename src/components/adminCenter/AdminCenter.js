import { AiOutlineSetting } from 'react-icons/ai';
import { FiFile } from 'react-icons/fi';
import { TbTicket } from 'react-icons/tb';
import { IoHeartOutline } from 'react-icons/io5';
import { RiMessage3Line } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import React from 'react';
import './adminCenter.scss';
// import { ReactComponent as OrderIcon } from "../";

// import {Button} from "react-bootstrap";

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
            <Link to="/personalHomePage" className="admin_user_name ">
              <p>User Name</p>
            </Link>
            <Link to="/" className="text-decoration-none admin_myfile">
              <AiOutlineSetting className="settingicon admin_my_profile_text "></AiOutlineSetting>
              我的檔案
            </Link>
          </div>
        </div>
        <ul className="admin_sidemenu list-unstyled d-flex flex-column ">
          <li className="">
            <Link to="/" className="text-decoration-none admin_select d-flex">
              <div className="d-flex align-items-center">
                <FiFile className="icon_size d-block mt-3 ms-1 " alt="orderIcon"></FiFile>
                <p className="d-block mt-3">我的訂單</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-decoration-none admin_select icons d-flex"
            >
              <IoHeartOutline
                className="icon_size d-block mt-3 ms-1"
                alt="likeIcon"
              ></IoHeartOutline>
              <p className="d-block mt-3">我的收藏</p>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="admin_select text-decoration-none icons d-flex"
            >
              <TbTicket
                className="icon_size d-block mt-3 ms-1"
                alt="ticketIcon"
              ></TbTicket>
              <p className="d-block mt-3">我的票券</p>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="admin_select text-decoration-none icons d-flex"
            >
              <RiMessage3Line
                className="icon_size d-block mt-3 ms-1"
                alt="messageIcon"
              ></RiMessage3Line>
              <p className="d-block mt-3">訊息管理</p>
            </Link>
          </li>
          <li>
            <Link
              to="/adminCenter"
              className="text-decoration-none admin_select icons d-flex
              community"
            >
              <BsPeople
                className="icon_size d-block mt-3 ms-1"
                alt="communityIcon"
              ></BsPeople>
              <p className="d-block mt-3">社群設定</p>
            </Link>

            {/* <Link to="/" className=""><img alt="" src={HoverBottom}></img><p>tesing</p></Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AdminCenter;
