import React, { useState } from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import headerbodyDog from '../../../images/logo_dog_body1.svg';
import headerRwdLinkarrow from '../../../images/headerRwdLinkarrow.svg';

function RwdMenu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Navbar
        expanded={isOpen}
        expand={false}
        bg="light"
        fixed="top"
        className="header_rwd_menuBar text-the-primary bg-gradient py-3 "
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={headerbodyDog}
              className="header_rwd_menuBar_img"
              alt="#/"
            ></img>
          </Navbar.Brand>
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
              className="header_rwd_tittle justify-content-start"
              onClick={() => setOpen(false)}
            ></Offcanvas.Header>
            <Offcanvas.Body className=" p-0">
              <div className="header_rwd_menu_imgWrap d-flex justify-content-center ">
                <img
                  className="header_rwd_menu_openImg"
                  src={headerbodyDog}
                  alt="#/"
                />
              </div>
              <Nav className=" justify-content-end flex-grow-1  ">
                <NavLink
                  className="header_rwd_menu_NavLink d-flex justify-content-between align-items-center"
                  reloadDocument
                  to="/"
                  onClick={() => setOpen(false)}
                >
                  <div className="header_rwd_menu_name px-4 ">首頁</div>
                  <img
                    className="header_rwd_menuNavLink_arrow me-3"
                    src={headerRwdLinkarrow}
                    alt="#/"
                  ></img>
                </NavLink>
                <NavLink
                  className="header_rwd_menu_NavLink d-flex justify-content-between align-items-center "
                  reloadDocument
                  to="/path1"
                  onClick={() => setOpen(false)}
                >
                  <div className="header_rwd_menu_name px-4 ">住宿</div>
                  <img
                    className="header_rwd_menuNavLink_arrow me-3"
                    src={headerRwdLinkarrow}
                    alt="#/"
                  ></img>
                </NavLink>
                <NavLink
                  className="header_rwd_menu_NavLink d-flex justify-content-between align-items-center"
                  reloadDocument
                  to="/path2"
                  onClick={() => setOpen(false)}
                >
                  <div className="header_rwd_menu_name px-4">景點&玩樂</div>
                  <img
                    className="header_rwd_menuNavLink_arrow me-3"
                    src={headerRwdLinkarrow}
                    alt="#/"
                  ></img>
                </NavLink>
                <NavLink
                  className="header_rwd_menu_NavLink d-flex justify-content-between align-items-center"
                  reloadDocument
                  to="/path3"
                  onClick={() => setOpen(false)}
                >
                  <div className="header_rwd_menu_name px-4">寵物商品</div>
                  <img
                    className="header_rwd_menuNavLink_arrow me-3"
                    src={headerRwdLinkarrow}
                    alt="#/"
                  ></img>
                </NavLink>
                <NavLink
                  className="header_rwd_menu_NavLink d-flex justify-content-between align-items-center"
                  reloadDocument
                  to="/path4"
                  onClick={() => setOpen(false)}
                >
                  <div className="header_rwd_menu_name px-4">住宿</div>
                  <img
                    className="header_rwd_menuNavLink_arrow me-3"
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
                  <div className="header_rwd_menu_name px-4">我的行程</div>
                  <img
                    className="header_rwd_menuNavLink_arrow me-3"
                    src={headerRwdLinkarrow}
                    alt="#/"
                  ></img>
                </NavLink>
                <NavLink
                  className="header_rwd_menu_NavLink d-flex justify-content-between align-items-center "
                  reloadDocument
                  to="/path6"
                  onClick={() => setOpen(false)}
                >
                  <div className="header_rwd_menu_name px-4">社群分享</div>
                  <img
                    className="header_rwd_menuNavLink_arrow me-3"
                    src={headerRwdLinkarrow}
                    alt="#/"
                  ></img>
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default RwdMenu;
