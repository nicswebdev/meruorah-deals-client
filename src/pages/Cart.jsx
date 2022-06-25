import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Container, Row, Col } from "reactstrap";

import { useSelector } from "react-redux";

import CartItem from "../components/CartItem";

import "../styles/shopping-cart.css";

const Cart = () => {
  const cartPackages = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div>
      <Header />
      <section className="section__cart">
        <Container>
          <Row>
            <Col lg="12" className="cart__page-title text-center">
              <h5>Your Bag</h5>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="cart__page-button text-center">
              <button>Continue Shopping</button>
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
                      <CartItem className="mt-2" item={item} key={index} />
                    ))
                  )}
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="cart__bottom">
                <h5>Order Summary</h5>
                <div className="subtotal__cart d-flex align-items-center justify-content-between">
                  <h5>Subtotal</h5>
                  <h6>IDR {totalAmount}</h6>
                </div>
                <button>
                  <div>Checkout</div>
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

export default Cart;
