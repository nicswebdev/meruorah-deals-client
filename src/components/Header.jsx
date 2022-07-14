import React, { useRef, useEffect } from "react";

import "../styles/header.css";
import "../styles/header2.css";

import logo from "../assets/image/logo5.png";

import { Container } from "reactstrap";

import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/userRedux";
import { getNavCategoriesData, resetNavCategory } from "../redux/categoryRedux";

const Header = (props) => {
    const {
        navCategories,
        isLoadingNavCategories,
        isErrorNavCategories,
        messageNavCategories,
    } = useSelector((state) => state.category);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isErrorNavCategories) {
            console.log(messageNavCategories);
        }

        dispatch(getNavCategoriesData());

        return () => {
            dispatch(resetNavCategory());
        };
    }, [isErrorNavCategories, messageNavCategories, dispatch]);

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

    const menuRef1 = useRef(null);
    const headerRef1 = useRef(null);
    let toggleMenu1;
    if (props.type === "wImg") {
        toggleMenu1 = () => menuRef1.current.classList.toggle("show__menu");
    } else {
        toggleMenu1 = () => menuRef1.current.classList.toggle("show__menu2");
    }

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const userData = useSelector((state) => state.user.currentUser);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                if (props.type === "wImg") {
                    headerRef1.current.classList.add("header__shrink");
                } else {
                    headerRef1.current.classList.add("header__shrink2");
                }
            } else {
                if (props.type === "wImg") {
                    headerRef1.current.classList.remove("header__shrink");
                } else {
                    headerRef1.current.classList.remove("header__shrink2");
                }
            }
        });

        return () => window.removeEventListener("scroll", null);
    }, [props]);

    const handleSignOut = () => {
        dispatch(userActions.logout());
    };

    return (
        <header
            className={props.type === "wImg" ? "header" : "header2"}
            ref={headerRef1}
        >
            <div className={props.type === "wImg" ? "top__menu" : "top__menu2"}>
                <div
                    className={
                        props.type === "wImg"
                            ? "top__menu__left d-flex align-items-center gap-3"
                            : "top__menu__left2 d-flex align-items-center gap-3"
                    }
                >
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
                <div
                    className={
                        props.type === "wImg"
                            ? "top__menu__right d-flex align-items-center gap-3"
                            : "top__menu__right2 d-flex align-items-center gap-3"
                    }
                >
                    {!!userData && userData?.accessToken ? (
                        <div
                            className={
                                props.type === "wImg"
                                    ? "logout__btn d-flex align-items-center gap-1"
                                    : "logout__btn2 d-flex align-items-center gap-1"
                            }
                        >
                            <div
                                style={{ cursor: "pointer" }}
                                onClick={handleSignOut}
                            >
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
            <Container
                className={
                    props.type === "wImg"
                        ? "header__container"
                        : "header__container2"
                }
            >
                <div
                    className={
                        props.type === "wImg"
                            ? "nav__wrapper d-flex align-items-center justify-content-between"
                            : "nav__wrapper2 d-flex align-items-center justify-content-between"
                    }
                >
                    <div
                        className={
                            props.type === "wImg"
                                ? "logo d-flex align-items-center"
                                : "logo2 d-flex align-items-center"
                        }
                    >
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div
                        className={
                            props.type === "wImg" ? "navigation" : "navigation2"
                        }
                        ref={menuRef1}
                        onClick={toggleMenu1}
                    >
                        <div
                            className={
                                props.type === "wImg"
                                    ? "menu d-flex align-items-center"
                                    : "menu2 d-flex align-items-center"
                            }
                        >
                            <NavLink
                                to="/"
                                className={(navClass) =>
                                    navClass.isActive ? "active__menu" : ""
                                }
                            >
                                Home
                            </NavLink>
                            {navCategories.map((item, index) => (
                                <NavLink
                                    to={`/category/${item._id}`}
                                    key={index}
                                    className={(navClass) =>
                                        navClass.isActive ? "active__menu" : ""
                                    }
                                >
                                    {item.title}
                                </NavLink>
                            ))}
                            <NavLink
                                to="/about-us"
                                className={(navClass) =>
                                    navClass.isActive ? "active__menu" : ""
                                }
                            >
                                About Us
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={(navClass) =>
                                    navClass.isActive ? "active__menu" : ""
                                }
                            >
                                Contact Us
                            </NavLink>
                            <div className="login__mobile">
                                <NavLink
                                    to="/login"
                                    className={(navClass) =>
                                        navClass.isActive ? "active__menu" : ""
                                    }
                                >
                                    Sign In
                                </NavLink>
                            </div>
                            <div className="login__mobile">
                                <NavLink
                                    to="/register"
                                    className={(navClass) =>
                                        navClass.isActive ? "active__menu" : ""
                                    }
                                >
                                    Sign Up
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            props.type === "wImg"
                                ? "nav__right d-flex align-items-center gap-3"
                                : "nav__right2 d-flex align-items-center gap-3"
                        }
                    >
                        <span
                            className={
                                props.type === "wImg"
                                    ? "cart__icon"
                                    : "cart__icon2"
                            }
                        >
                            <Link to="/cart">
                                <i class="ri-shopping-basket-line"></i>
                                <span
                                    className={
                                        props.type === "wImg"
                                            ? "cart__badge"
                                            : "cart__badge2"
                                    }
                                >
                                    {totalQuantity}
                                </span>
                            </Link>
                        </span>
                        <span
                            className={
                                props.type === "wImg"
                                    ? "mobile__menu"
                                    : "mobile__menu2"
                            }
                            onClick={toggleMenu1}
                        >
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
