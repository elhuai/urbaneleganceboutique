import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import headerbodyDog from '../../../images/logo_dog_body1.svg';
import headerRwdLinkarrow from '../../../images/headerRwdLinkarrow.svg';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
// import { IoCart } from 'react-icons/io5';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

function RwdMenu() {
  const [cart, setCart] = useState([]);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Navbar
        expanded={isOpen}
        expand={false}
        bg="light"
        // fixed="top"
        className="header_rwd_menuBar text-the-primary bg-gradient"
      >
        <Navbar.Brand href="/">
          <img
            src={headerbodyDog}
            className="header_rwd_menuBar_img"
            alt="#/"
          ></img>
        </Navbar.Brand>
        <div className="  d-flex header_Icon align-items-center justify-content-end ">
          <ShoppingCart
            placement={'end'}
            name={'end'}
            cart={cart}
            setCart={setCart}
          />
          {/* TODO: ICON更改 */}
          <Link to="/adminCenter" className="header_Icon_user">
            {/* <HiUser /> */}
            <FaUser />
          </Link>
        </div>
        <Navbar.Toggle
          className="header_rwd_menubtn"
          aria-controls="offcanvasNavbar"
          onClick={() => setOpen(isOpen ? false : 'expanded')}
        />
        <Navbar.Offcanvas
          className="header_rwd_menu_Offcanvas"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header
            closeButton
            className="header_rwd_tittle"
            onClick={() => setOpen(false)}
          >
            <div className="header_rwd_menu_imgWrap d-flex justify-content-center ">
              <img
                className="header_rwd_menu_openImg"
                src={headerbodyDog}
                alt="#/"
              />
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body className=" p-0">
            <Nav className=" justify-content-end flex-grow-1  ">
              <NavLink
                className="header_rwd_menu_NavLink d-flex justify-content-between align-items-center"
                reloadDocument
                to="/"
                onClick={() => setOpen(false)}
              >
                <div className="header_rwd_menu_name ">首頁</div>
                <img
                  className="header_rwd_menuNavLink_arrow"
                  src={headerRwdLinkarrow}
                  alt="#/"
                ></img>
              </NavLink>
              {/* <NavLink
                className="header_rwd_menu_NavLink d-flex justify-content-between align-items-center "
                reloadDocument
                to="/path1"
                onClick={() => setOpen(false)}
              >
                <div className="header_rwd_menu_name ">住宿</div>
                <img
                  className="header_rwd_menuNavLink_arrow"
                  src={headerRwdLinkarrow}
                  alt="#/"
                ></img>
              </NavLink> */}
              <NavLink
                className="header_rwd_menu_NavLink d-flex justify-content-between align-items-center"
                reloadDocument
                to="/ec-commodityhomepage"
                onClick={() => setOpen(false)}
              >
                <div className="header_rwd_menu_name"> 寵物商品</div>
                <img
                  className="header_rwd_menuNavLink_arrow"
                  src={headerRwdLinkarrow}
                  alt="#/"
                ></img>
              </NavLink>
              <NavLink
                className="header_rwd_menu_NavLink d-flex justify-content-between align-items-center"
                reloadDocument
                to="/ec-restauranthomepage"
                onClick={() => setOpen(false)}
              >
                <div className="header_rwd_menu_name">餐廳</div>
                <img
                  className="header_rwd_menuNavLink_arrow"
                  src={headerRwdLinkarrow}
                  alt="#/"
                ></img>
              </NavLink>
              <NavLink
                className="header_rwd_menu_NavLink d-flex justify-content-between align-items-center"
                reloadDocument
                to="/ec-enjoyhomepage"
                onClick={() => setOpen(false)}
              >
                <div className="header_rwd_menu_name">景點&玩樂</div>
                <img
                  className="header_rwd_menuNavLink_arrow"
                  src={headerRwdLinkarrow}
                  alt="#/"
                ></img>
              </NavLink>
              <NavLink
                className="header_rwd_menu_NavLink d-flex justify-content-between align-items-center"
                reloadDocument
                to="/travel"
                onClick={() => setOpen(false)}
              >
                <div className="header_rwd_menu_name">我的行程</div>
                <img
                  className="header_rwd_menuNavLink_arrow"
                  src={headerRwdLinkarrow}
                  alt="#/"
                ></img>
              </NavLink>
              <NavLink
                className="header_rwd_menu_NavLink d-flex justify-content-between align-items-center "
                reloadDocument
                to="/communityHomePage"
                onClick={() => setOpen(false)}
              >
                <div className="header_rwd_menu_name">社群分享</div>
                <img
                  className="header_rwd_menuNavLink_arrow"
                  src={headerRwdLinkarrow}
                  alt="#/"
                ></img>
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      <Outlet />
    </>
  );
}

export default RwdMenu;
