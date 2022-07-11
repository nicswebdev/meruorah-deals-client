import React from "react";
import Footer from "../components/Footer";

import { Container, Row, Col } from "reactstrap";

import { useSelector } from "react-redux";

import CartItem from "../components/CartItem";

import "../styles/shopping-cart.css";

import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import Header2 from "../components/Header2";

const Cart = () => {
    const cartPackages = useSelector((state) => state.cart.cartItems);

    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const userData = useSelector((state) => state.user.currentUser);

    return (
        <div>
            <Header2 />
            <section className="section__cart">
                <Container>
                    <Row>
                        <Col lg="12" className="cart__page-title text-center">
                            <h5>Your Bag</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12" className="cart__page-button text-center">
                            <Link
                                to="/"
                                style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                <button>Continue Shopping</button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="8">
                            <div className="cart__container">
                                <div className="cart__item-list">
                                    {cartPackages.length === 0 ? (
                                        <h5 className="text-center mt-5">
                                            No package added to the cart.
                                        </h5>
                                    ) : (
                                        cartPackages.map((item, index) => (
                                            <CartItem
                                                className="mt-2"
                                                item={item}
                                                key={index}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            {cartPackages.length > 0 && (
                                <div className="cart__bottom">
                                    <h5>Order Summary</h5>
                                    <div className="subtotal__cart d-flex align-items-center justify-content-between">
                                        <h5>Subtotal</h5>
                                        <h6>
                                            <NumberFormat
                                                value={totalAmount}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"IDR "}
                                                renderText={(value) => value}
                                            />
                                        </h6>
                                    </div>
                                    {!!userData && userData?.accessToken ? (
                                        <Link to="/checkout">
                                            <button>
                                                <div>Checkout</div>
                                            </button>
                                        </Link>
                                    ) : (
                                        <Link to="/login">
                                            <button>
                                                <div>Login to checkout...</div>
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default Cart;
