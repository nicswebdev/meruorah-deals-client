import React, { useRef, useEffect } from "react";

import "../styles/header2.css";

import logo from "../assets/image/logo5.png";

import { Container } from "reactstrap";

import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/userRedux";
import { getNavCategoriesData, resetNavCategory } from "../redux/categoryRedux";

const Header2 = () => {
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

    const menuRef2 = useRef(null);
    const headerRef2 = useRef(null);
    const toggleMenu2 = () => menuRef2.current.classList.toggle("show__menu2");

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const userData = useSelector((state) => state.user.currentUser);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef2.current.classList.add("header__shrink2");
            } else {
                headerRef2.current.classList.remove("header__shrink2");
            }
        });

        return () => window.removeEventListener("scroll", null);
    }, []);

    const handleSignOut = () => {
        dispatch(userActions.logout());
    };

    return (
        <header className="header2" ref={headerRef2}>
            <div className="top__menu2">
                <div className="top__menu__left2 d-flex align-items-center gap-3">
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
                <div className="top__menu__right2 d-flex align-items-center gap-3">
                    {!!userData && userData?.accessToken ? (
                        <div className="logout__btn2 d-flex align-items-center gap-1">
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
            <Container className="header__container2">
                <div className="nav__wrapper2 d-flex align-items-center justify-content-between">
                    <div className="logo2 d-flex align-items-center">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div
                        className="navigation2"
                        ref={menuRef2}
                        onClick={toggleMenu2}
                    >
                        <div className="menu2 d-flex align-items-center">
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
                        </div>
                    </div>
                    <div className="nav__right2 d-flex align-items-center gap-3">
                        <span className="cart__icon2">
                            <Link to="/cart">
                                <i class="ri-shopping-basket-line"></i>
                                <span className="cart__badge2">
                                    {totalQuantity}
                                </span>
                            </Link>
                        </span>
                        <span className="mobile__menu2" onClick={toggleMenu2}>
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header2;
