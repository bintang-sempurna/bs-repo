import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import LogoNav1 from "../../assets/img/logo/logo-white.png";
import "./style.css";

const NavbarBs = () => {
  const location = useLocation();

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Navbar
        bg="red_custom"
        expand="lg"
        className="bg-body-tertiary p-2 fixed-top"
      >
        <Container>
          <Navbar className="bg-body-tertiary">
            <Navbar.Brand href="/">
              <img
                src={LogoNav1}
                width="120"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Navbar>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto p-2 justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                as={Link}
                to="/"
                className={`${location.pathname === "/" ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                Beranda
              </Nav.Link>

              <NavDropdown
                title="Profile"
                id="basic-nav-dropdown"
                className={`${
                  location.pathname === "/profile/tentang"
                    ? "active"
                    : "" | (location.pathname === "/profile/award")
                    ? "active"
                    : "" | (location.pathname === "/profile/testimoni")
                    ? "active"
                    : "" | (location.pathname === "/profile/hubungikami")
                    ? "active"
                    : ""
                }`}
              >
                <NavDropdown.Item
                  as={Link}
                  className={`${
                    location.pathname === "/profile/tentang" ? "active" : ""
                  }`}
                  onClick={closeMobileMenu}
                  to="/profile/tentang"
                  // onClick={goToTentang}
                >
                  Tentang Kami
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/profile/award"
                  className={`${
                    location.pathname === "/profile/award" ? "active" : ""
                  }`}
                  // onClick={goToAward}
                  onClick={closeMobileMenu}
                >
                  Award
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/profile/testimoni"
                  className={`${
                    location.pathname === "/profile/testimoni" ? "active" : ""
                  }`}
                  // onClick={() => goToTestimoni()}
                  onClick={closeMobileMenu}
                >
                  Testimoni
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/profile/hubungikami"
                  className={`${
                    location.pathname === "/profile/hubungikami" ? "active" : ""
                  }`}
                  // onClick={() => goToHubungi()}
                  onClick={closeMobileMenu}
                >
                  Hubungi Kami
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Events"
                id="basic-nav-dropdown"
                className={`${
                  location.pathname === "/events/now"
                    ? "active"
                    : "" | (location.pathname === "/events/recap")
                    ? "active"
                    : ""
                }`}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/events/now"
                  className={`${
                    location.pathname === "/events/now" ? "active" : ""
                  }`}
                  // onClick={() => goToEventNow()}
                  onClick={closeMobileMenu}
                >
                  Events Now
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/events/recap"
                  className={`${
                    location.pathname === "/events/recap" ? "active" : ""
                  }`}
                  // onClick={() => goToEventRecap()}
                  onClick={closeMobileMenu}
                >
                  Events Recap
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/product"
                className={`${
                  location.pathname === "/product" ? "active" : ""
                }`}
                // onClick={() => goToProduct()}
                onClick={closeMobileMenu}
              >
                Product
              </Nav.Link>

              <NavDropdown
                title="Insight"
                id="basic-nav-dropdown"
                className={`${
                  location.pathname === "/insight/technology"
                    ? "active"
                    : "" | (location.pathname === "/insight/knowledge")
                    ? "active"
                    : "" | (location.pathname === "/insight/blog")
                    ? "active"
                    : ""
                }`}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/insight/technology"
                  className={`${
                    location.pathname === "/insight/technology" ? "active" : ""
                  }`}
                  // onClick={() => goTotechnology()}
                  onClick={closeMobileMenu}
                >
                  Technology
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/insight/knowledge"
                  className={`${
                    location.pathname === "/insight/knowledge" ? "active" : ""
                  }`}
                  // onClick={() => goToKnowledge()}
                  onClick={closeMobileMenu}
                >
                  Knowledge
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/insight/blog"
                  className={`${
                    location.pathname === "/insight/blog" ? "active" : ""
                  }`}
                  // onClick={() => goToBlog()}
                  onClick={closeMobileMenu}
                >
                  Blog
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                href="https://bintangsempurna.co.id/career/"
                className="text-white"
              >
                Carrer
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
      <Footer />
    </>
  );
};

export default NavbarBs;
