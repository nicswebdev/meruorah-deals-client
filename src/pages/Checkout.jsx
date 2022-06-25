import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Container, Row, Col } from "reactstrap";

import { useSelector } from "react-redux";

import CheckoutSummary from "../components/CheckoutSummary";

import "../styles/shopping-cart.css";
import "../styles/login.css";
import "../styles/checkout.css";

import { Link } from "react-router-dom";

const Checkout = () => {
  const cartPackages = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div>
      <Header />
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
                            required
                            readOnly
                          />
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="form__group gap-2">
                          <i class="ri-user-line"></i>
                          <input type="text" placeholder="Last Name" required />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <div className="form__group gap-2">
                          <i class="ri-mail-line"></i>
                          <input type="email" placeholder="Email" required />
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="form__group gap-2">
                          <i class="ri-phone-line"></i>
                          <input
                            type="text"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <div className="form__group gap-2">
                          <i class="ri-map-pin-line"></i>
                          <input type="text" placeholder="Address" required />
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="form__group gap-2">
                          <i class="ri-building-line"></i>
                          <input type="text" placeholder="City" required />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <div className="form__group gap-2">
                          <i class="ri-flag-line"></i>
                          <input type="text" placeholder="Country" required />
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="form__group gap-2">
                          <i class="ri-home-8-line"></i>
                          <input type="text" placeholder="Zip Code" required />
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="cart__bottom">
                <h5 style={{marginBottom: "15px"}}>Order Summary</h5>
                {cartPackages.length === 0 ? (
                  <h5 className="text-center mt-5">
                    No package added to the cart.
                  </h5>
                ) : (
                  cartPackages.map((item, index) => (
                    <CheckoutSummary item={item} key={index} />
                  ))
                )}
                <div className="subtotal__cart d-flex align-items-center justify-content-between">
                  <h5>Subtotal</h5>
                  <h6>IDR {totalAmount}</h6>
                </div>
                <Link to="/checkout">
                  <button>
                    <div>Submit</div>
                  </button>
                </Link>
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
