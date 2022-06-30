import React, { useRef, useEffect } from "react";

import "../styles/header.css";

import logo from "../assets/image/logo3.png";

import { Container } from "reactstrap";

import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/userRedux";

const Header = () => {

  const nav__links = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Hotels",
      path: "/category/1",
    },
    {
      display: "Restaurant",
      path: "/category/2",
    },
    {
      display: "Spa",
      path: "/category/3",
    },
    {
      display: "Cruise",
      path: "/category/4",
    },
    {
      display: "Tours",
      path: "/category/5",
    },
    {
      display: "About Us",
      path: "/about-us",
    },
    {
      display: "Contact Us",
      path: "/contact",
    },
  ];

  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const totalQuantity = useSelector((state)=>state.cart.totalQuantity);
  const userData = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

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

  const handleSignOut = () => {
    dispatch(userActions.logout());
  }

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
          {!!userData && userData?.accessToken ? (
            <div className="logout__btn d-flex align-items-center gap-1">
              <div style={{ cursor: "pointer" }} onClick={handleSignOut}>
                <i class="ri-login-box-line"></i> Sign Out
              </div>
            </div>
          ) : (
            <>
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
            </>
          )}
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
            <div className="menu d-flex align-items-center">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="nav__right d-flex align-items-center gap-3">
            <span className="cart__icon">
              <Link to="/cart">
                <i class="ri-shopping-basket-line"></i>
                <span className="cart__badge">{totalQuantity}</span>
              </Link>
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
