import React, { useRef, useEffect } from "react";

import "../styles/header.css";

import logo from "../assets/image/logo3.png";

import { Container } from "reactstrap";

import {Link} from 'react-router-dom';

const Header = () => {

  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll", null);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="top__menu">
        <div className="top__menu__left d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-1">
            <Link to="tel:+623852440234">
              <i class="ri-phone-line"></i> +62 385 2440234
            </Link>
          </div>
          <div className="d-flex align-items-center gap-1">
            <Link to="mail:stay@meruorah.com">
              <i class="ri-mail-line"></i> stay@meruorah.com
            </Link>
          </div>
        </div>
        <div className="top__menu__right d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-1">
            <Link to={`/login`}>
              <i class="ri-login-box-line"></i> Sign In
            </Link>
          </div>
          <div className="d-flex align-items-center gap-1">
            <Link to={`/register`}>
              <i class="ri-login-box-line"></i> Register
            </Link>
          </div>
        </div>
      </div>
      <Container className="header__container">
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo d-flex align-items-center">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5"></div>
          </div>
          <div className="nav__right d-flex align-items-center gap-3">
            <span className="cart__icon">
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">2</span>
            </span>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
