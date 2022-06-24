import React from "react";

import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/login.css";

const Register = () => {
  return (
    <div>
      <Header />
      <section className="login__section">
        <Container>
          <Row>
            <Col
              lg="5"
              md="6"
              sm="12"
              className="m-auto text-center login__content"
            >
              <h5>Register</h5>
              <form className="form mb-5">
                <Row>
                  <Col lg="6">
                    <div className="form__group gap-2">
                      <i class="ri-user-line"></i>
                      <input type="text" placeholder="First Name" required />
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
                  <Col lg="12">
                    <div className="form__group gap-2">
                      <i class="ri-mail-line"></i>
                      <input type="email" placeholder="Email" required />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <div className="form__group gap-2">
                      <i class="ri-lock-line"></i>
                      <input type="password" placeholder="Password" required />
                    </div>
                  </Col>
                </Row>

                <button type="submit" className="login__btn">
                  Register
                </button>
              </form>
              <div className="link__register">
                Already have an account ? Sign In.
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
