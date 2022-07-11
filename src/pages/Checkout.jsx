import { useState } from "react";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";

import { Container, Row, Col } from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import { order } from "../redux/apiCalls";

import CheckoutSummary from "../components/CheckoutSummary";

import { cartActions } from "../redux/cartRedux";

import "../styles/shopping-cart.css";
import "../styles/login.css";
import "../styles/checkout.css";

import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const Checkout = () => {
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [zipcode, setZipcode] = useState("");

    const cartPackages = useSelector((state) => state.cart.cartItems);

    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const userData = useSelector((state) => state.user.currentUser);

    const dispatch = useDispatch();
    const { isFetching } = useSelector((state) => state.order);

    const handleClick = (e) => {
        e.preventDefault();
        order(dispatch, {
            userId: userData._id,
            packages: cartPackages,
            amount: totalAmount,
            address: {
                phone: phone,
                address: address,
                city: city,
                country: country,
                zipcode: zipcode,
            },
            status: "Success",
        });

        // setTimeout(() => {
        //   dispatch(cartActions.clearItems());
        // }, 2000);
        dispatch(cartActions.clearItems());
    };

    return (
        <div>
            <Header2 />
            <section className="section__cart">
                <Container>
                    <Row>
                        <Col lg="12" className="cart__page-title text-center">
                            <h5>Checkout</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="8">
                            <div className="cart__container">
                                <div className="cart__item-list">
                                    <form className="form mb-5">
                                        <Row>
                                            <Col lg="6">
                                                <div className="form__group gap-2">
                                                    <i class="ri-user-line"></i>
                                                    <input
                                                        type="text"
                                                        placeholder="First Name"
                                                        value={userData.fname}
                                                        required
                                                        readOnly
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="form__group gap-2">
                                                    <i class="ri-user-line"></i>
                                                    <input
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={userData.lname}
                                                        required
                                                        readOnly
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <div className="form__group gap-2">
                                                    <i class="ri-mail-line"></i>
                                                    <input
                                                        type="email"
                                                        placeholder="Email"
                                                        value={userData.email}
                                                        required
                                                        readOnly
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="form__group gap-2">
                                                    <i class="ri-phone-line"></i>
                                                    <input
                                                        type="text"
                                                        placeholder="Phone Number"
                                                        onChange={(e) =>
                                                            setPhone(
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <div className="form__group gap-2">
                                                    <i class="ri-map-pin-line"></i>
                                                    <input
                                                        type="text"
                                                        placeholder="Address"
                                                        onChange={(e) =>
                                                            setAddress(
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="form__group gap-2">
                                                    <i class="ri-building-line"></i>
                                                    <input
                                                        type="text"
                                                        placeholder="City"
                                                        onChange={(e) =>
                                                            setCity(
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <div className="form__group gap-2">
                                                    <i class="ri-flag-line"></i>
                                                    <input
                                                        type="text"
                                                        placeholder="Country"
                                                        onChange={(e) =>
                                                            setCountry(
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="form__group gap-2">
                                                    <i class="ri-home-8-line"></i>
                                                    <input
                                                        type="text"
                                                        placeholder="Zip Code"
                                                        onChange={(e) =>
                                                            setZipcode(
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className="cart__bottom">
                                <h5 style={{ marginBottom: "15px" }}>
                                    Order Summary
                                </h5>
                                {cartPackages.length === 0 ? (
                                    <h5 className="text-center mt-5">
                                        No package added to the cart.
                                    </h5>
                                ) : (
                                    cartPackages.map((item, index) => (
                                        <CheckoutSummary
                                            item={item}
                                            key={index}
                                        />
                                    ))
                                )}
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
                                <button
                                    disabled={isFetching}
                                    onClick={handleClick}
                                >
                                    <div>
                                        {isFetching ? "Loading..." : "Submit"}
                                    </div>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default Checkout;
