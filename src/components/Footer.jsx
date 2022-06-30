import React from "react";

import { Container, Row, Col } from "reactstrap";

import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">GET IN TOUCH</h5>
            <p>
              Kawasan Marina Jalan Soekarno Hatta, Labuan Bajo West Manggarai,
              NTT 86711
            </p>
            <p>
              Phone: +62 385 2440234
              <br />
              E-mail: stay@meruorah.com
              <br />
              Website: meruorahlabuanbajo.com
            </p>
          </Col>
          <Col lg="3" md="4" sm="6" className="footer__help">
            <h5 className="footer__title">HELP</h5>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col lg="3" md="4" sm="6" className="footer__partner">
            <h5 className="footer__title">OUR PARTNER BRAND</h5>
            <ul>
              <li>Meruorah Komodo Labuan Bajo</li>
              <li>Brand 1</li>
              <li>Brand 2</li>
              <li>Brand 3</li>
            </ul>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">NEWSLETTER</h5>
            <p>Get the latest updates and offers.</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your e-mail" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col lg="12" md="12">
            <p className="copyright__text">
              2022 Meruorah Deals. All Right Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
